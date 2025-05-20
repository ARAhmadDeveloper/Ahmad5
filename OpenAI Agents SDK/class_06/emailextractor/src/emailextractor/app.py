import os
import re
import json
from datetime import datetime
from dotenv import load_dotenv
from typing import List, Optional
from pydantic import BaseModel
import google.generativeai as genai

# Load API key
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    raise EnvironmentError("GOOGLE_API_KEY not found in environment.")

genai.configure(api_key=api_key)

# Define Event model
class CalendarEvent(BaseModel):
    name: str
    date: str
    participants: List[str]
    location: Optional[str] = None
    description: Optional[str] = None

# Date validation tool
def validate_date(date_str: str) -> str:
    formats = ["%Y-%m-%d", "%m/%d/%Y", "%d/%m/%Y", "%B %d, %Y", "%b %d, %Y"]
    for fmt in formats:
        try:
            return datetime.strptime(date_str.strip(), fmt).strftime("%Y-%m-%d")
        except ValueError:
            continue
    return date_str  # Return original if nothing matches

# Gemini prompt template
PROMPT_TEMPLATE = """
You are a calendar assistant. Extract a calendar event from the following text.

Provide the result as a JSON object with the following fields:
- name: Event name
- date: Date in YYYY-MM-DD format
- participants: List of participant names
- location: (optional)
- description: (optional)

Only include available fields. If multiple events are mentioned, return the most important one.

Text:
"{text}"
"""

# Event extraction function
def extract_event_from_text(text: str) -> CalendarEvent:
    prompt = PROMPT_TEMPLATE.format(text=text)
    model = genai.GenerativeModel("gemini-1.5-flash")
    response = model.generate_content(prompt)

    try:
        # Remove markdown formatting if present
        raw_text = response.text.strip()
        if raw_text.startswith("```"):
            raw_text = re.sub(r"^```(?:json)?", "", raw_text).strip()
            raw_text = re.sub(r"```$", "", raw_text).strip()

        output = json.loads(raw_text)

        # Validate date
        if "date" in output:
            output["date"] = validate_date(output["date"])

        return CalendarEvent(**output)

    except Exception as e:
        print("Error parsing response:", e)
        print("Raw response:", response.text)
        raise

# Demo
def main():
    simple_text = "Let's have a team meeting on 2023-05-15 with John, Sarah, and Mike."

    complex_text = """
    Hi team,

    I'm scheduling our quarterly planning session for May 20, 2023 at the main conference room.
    All department heads (Lisa, Mark, Jennifer, and David) should attend. We'll be discussing
    our Q3 objectives and reviewing Q2 performance. Please bring your department reports.

    Also, don't forget about the company picnic on 06/15/2023!
    """

    print("\n--- Simple Text ---")
    event1 = extract_event_from_text(simple_text)
    print(event1.model_dump_json(indent=2))

    print("\n--- Complex Text ---")
    event2 = extract_event_from_text(complex_text)
    print(event2.model_dump_json(indent=2))

if __name__ == "__main__":
    main()
