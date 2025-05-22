import logging
from dotenv import load_dotenv
import os
import google.generativeai as genai

# Setup basic logging
logging.basicConfig(level=logging.INFO)

# Load .env
load_dotenv()
api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise ValueError("GEMINI_API_KEY not found in .env")

genai.configure(api_key=api_key)

model = genai.GenerativeModel("gemini-1.5-flash")

prompt = "write a funny joke for programmers."

logging.info("Sending prompt to Gemini: %s", prompt)
response = model.generate_content(prompt)
logging.info("Received response:\n%s", response.text)


# print(response.text)
