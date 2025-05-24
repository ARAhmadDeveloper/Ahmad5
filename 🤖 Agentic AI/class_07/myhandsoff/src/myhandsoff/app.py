import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.environ["GOOGLE_API_KEY"])

# ====== Tools ======
def get_available_flights(origin: str, destination: str, date: str) -> str:
    flights = [
        {"flight": "AA123", "departure": "08:00", "arrival": "10:30", "price": "$299"},
        {"flight": "DL456", "departure": "12:15", "arrival": "14:45", "price": "$329"},
        {"flight": "UA789", "departure": "16:30", "arrival": "19:00", "price": "$279"}
    ]
    result = (
    f"📅 Great! I found some flights from **{origin.title()}** to **{destination.title()}** on **{date}**.\n"
    f"Here are your options:\n\n"
)

    for flight in flights:
        result += (
            f"✈️ Flight **{flight['flight']}**\n"
            f"   🕗 Departure: {flight['departure']}\n"
            f"   🕓 Arrival: {flight['arrival']}\n"
            f"   💵 Price: {flight['price']}\n\n"
    )

    result += (
        "Let me know if you'd like to book one of these or need options for different times, "
        "airlines, or travel classes. I’m here to help you plan your journey! 🌍"
    )

    for flight in flights:
        result += f"{flight['flight']} - {flight['departure']} to {flight['arrival']} - {flight['price']}\n"
    return result

def check_refund_eligibility(booking_reference: str) -> str:
    refund_policies = {
        "ABC123": {"eligible": True, "refund_amount": "$250", "reason": "Cancellation within 24 hours"},
        "DEF456": {"eligible": False, "reason": "Non-refundable fare"},
        "GHI789": {"eligible": True, "refund_amount": "$150", "reason": "Partial refund due to fare rules"}
    }
    policy = refund_policies.get(booking_reference)
    if not policy:
        return f"Booking {booking_reference} is not found in our records."
    if policy["eligible"]:
        if policy["eligible"]:
            return (
                f"✅ Good news! Your booking **{booking_reference}** is eligible for a refund.\n"
                f"💰 Refund Amount: **{policy['refund_amount']}**\n"
                f"📌 Reason: {policy['reason']}\n\n"
                f"We’ll start processing your refund right away. It may take 5–7 business days to reflect "
                f"in your account depending on your bank. Let me know if there’s anything else I can help with!"
            )
        else:
            return (
                f"⚠️ Unfortunately, your booking **{booking_reference}** isn’t eligible for a refund.\n"
                f"📌 Reason: {policy['reason']}\n\n"
                f"If you believe this is an error or want to request a policy review, I can assist with that too."
            )

            return f"Booking {booking_reference} is not eligible for a refund. Reason: {policy['reason']}"

# ====== Routing Logic ======
def classify_query(query: str) -> str:
    q = query.lower()
    if any(word in q for word in ["book", "flight", "reservation"]):
        return "booking"
    elif any(word in q for word in ["refund", "cancel", "reimbursement"]):
        return "refund"
    return "general"

# ====== Gemini Interaction ======
def ask_gemini(prompt: str) -> str:
    model = genai.GenerativeModel("gemini-1.5-flash")  # Free-tier model
    chat = model.start_chat()
    response = chat.send_message(prompt)
    return response.text.strip()

# ====== Main Logic ======
def handle_query(query: str):
    kind = classify_query(query)
    
    if kind == "booking":
        # Hardcoded example — realistically you'd extract these dynamically
        origin = "New York"
        destination = "Los Angeles"
        date = "2025-06-01"
        return get_available_flights(origin, destination, date)

    elif kind == "refund":
        # Example reference; in practice, you'd extract this too
        ref = "ABC123"
        return check_refund_eligibility(ref)

    else:
        # Ask Gemini about general travel questions
        return ask_gemini(f"Answer this general travel question: {query}")

# ====== CLI Entry Point ======
def main():
    print("💬 Travel Assistant is ready! Type 'exit' to quit.")
    while True:
        query = input("\nYou: ").strip()
        if not query:
            print("🤔 You didn’t say anything... try again.")
            continue
        if query.lower() == "exit":
            print("👋 Bye!")
            break

        answer = handle_query(query)
        print(f"\n🧠 Assistant: {answer}")

if __name__ == "__main__":
    main()
