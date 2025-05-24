
from google import genai

client = genai.Client(api_key="AIzaSyDb6ayt_8bHOUXAnnxYSZ5pUV7cZMs0iTE")

response = client.models.generate_content(
    model="gemini-2.0-flash", contents="Explain how AI works in 200 words"
)
print(response.text)


















# from dataclasses import dataclass
# from typing import List
# from dotenv import load_dotenv
# import google.generativeai as genai
# import asyncio
# import os
# import time
# from google.api_core import retry
# from google.api_core.exceptions import ResourceExhausted

# # Load Gemini API Key
# load_dotenv()
# api_key = os.environ.get("GEMINI_API_KEY")
# genai.configure(api_key=api_key)

# # Rate limiting constants
# MAX_RETRIES = 3
# INITIAL_RETRY_DELAY = 1  # seconds
# MAX_RETRY_DELAY = 60  # seconds
# REQUESTS_PER_MINUTE = 30  # Conservative limit for free tier
# TOKENS_PER_MINUTE = 30000  # Conservative limit for free tier

# class RateLimiter:
#     def __init__(self, requests_per_minute, tokens_per_minute):
#         self.requests_per_minute = requests_per_minute
#         self.tokens_per_minute = tokens_per_minute
#         self.request_timestamps = []
#         self.token_counts = []
#         self.lock = asyncio.Lock()

#     async def wait_if_needed(self, estimated_tokens=0):
#         async with self.lock:
#             current_time = time.time()
#             # Remove old timestamps (older than 1 minute)
#             self.request_timestamps = [ts for ts in self.request_timestamps if current_time - ts < 60]
#             self.token_counts = [(ts, count) for ts, count in self.token_counts if current_time - ts < 60]

#             # Check if we need to wait for request rate limit
#             if len(self.request_timestamps) >= self.requests_per_minute:
#                 wait_time = 60 - (current_time - self.request_timestamps[0])
#                 if wait_time > 0:
#                     await asyncio.sleep(wait_time)

#             # Check if we need to wait for token rate limit
#             current_tokens = sum(count for _, count in self.token_counts)
#             if current_tokens + estimated_tokens > self.tokens_per_minute:
#                 wait_time = 60 - (current_time - self.token_counts[0][0])
#                 if wait_time > 0:
#                     await asyncio.sleep(wait_time)

#             # Update tracking
#             self.request_timestamps.append(current_time)
#             self.token_counts.append((current_time, estimated_tokens))

# # Initialize rate limiter
# rate_limiter = RateLimiter(REQUESTS_PER_MINUTE, TOKENS_PER_MINUTE)

# @dataclass
# class Purchase:
#     id: str
#     name: str
#     price: float
#     date: str

# @dataclass
# class UserContext:
#     uid: str
#     is_pro_user: bool

#     async def fetch_purchases(self) -> List[Purchase]:
#         if self.uid == "user123":
#             return [
#                 Purchase(id="p1", name="Basic Plan", price=9.99, date="2023-01-15"),
#                 Purchase(id="p2", name="Premium Add-on", price=4.99, date="2023-02-20")
#             ]
#         return []

# async def get_user_info(context: UserContext) -> str:
#     user_type = "Pro" if context.is_pro_user else "Free"
#     return f"User ID: {context.uid}, Account Type: {user_type}"

# async def get_purchase_history(context: UserContext) -> str:
#     purchases = await context.fetch_purchases()
#     if not purchases:
#         return "No purchase history found."
#     result = "Purchase History:\n"
#     for p in purchases:
#         result += f"- {p.name}: ${p.price} on {p.date}\n"
#     return result

# async def get_personalized_greeting(context: UserContext) -> str:
#     if context.is_pro_user:
#         return "Welcome back to our premium service! We value your continued support."
#     else:
#         return "Welcome! Consider upgrading to our Pro plan for additional features."

# async def run_agent(context: UserContext, query: str) -> str:
#     greeting = await get_personalized_greeting(context)
#     user_info = await get_user_info(context)
#     purchase_history = await get_purchase_history(context)

#     system_prompt = f"""
#     You are a helpful assistant that provides personalized responses based on user context.
#     Use the provided info to answer the following question from the user.

#     Context:
#     {user_info}
#     {purchase_history}
#     {greeting}
#     """

#     model = genai.GenerativeModel('gemini-1.5-pro')
    
#     # Estimate tokens (rough approximation)
#     estimated_tokens = len(system_prompt.split()) + len(query.split())
    
#     for attempt in range(MAX_RETRIES):
#         try:
#             # Wait if we need to respect rate limits
#             await rate_limiter.wait_if_needed(estimated_tokens)
            
#             response = model.generate_content([
#                 system_prompt,
#                 f"User query: {query}"
#             ])
#             return response.text
            
#         except ResourceExhausted as e:
#             if attempt == MAX_RETRIES - 1:
#                 raise Exception("API quota exceeded. Please try again later or upgrade your plan.") from e
            
#             # Calculate exponential backoff delay
#             delay = min(INITIAL_RETRY_DELAY * (2 ** attempt), MAX_RETRY_DELAY)
#             print(f"Rate limit hit, retrying in {delay} seconds...")
#             await asyncio.sleep(delay)
            
#         except Exception as e:
#             raise Exception(f"Error generating response: {str(e)}") from e

# async def main():
#     pro_user = UserContext(uid="user123", is_pro_user=True)
#     free_user = UserContext(uid="user456", is_pro_user=False)

#     print("\n--- Pro User Example ---")
#     result = await run_agent(pro_user, "Tell me about myself and my purchases")
#     print(result)

#     print("\n--- Free User Example ---")
#     result = await run_agent(free_user, "Tell me about myself and my purchases")
#     print(result)

# if __name__ == "__main__":
#     asyncio.run(main())
