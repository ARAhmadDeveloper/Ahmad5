import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load environment variables from your .env file
load_dotenv()  # Ensure you have a .env file at the root

# Retrieve your API key from the environment
gemini_api_key = os.getenv("GEMINI_API_KEY")
if gemini_api_key is None:
    raise ValueError("GEMINI_API_KEY is not set. Please add it to your environment or .env file.")

# Configure the Gemini client with your API key
genai.configure(api_key=gemini_api_key)

# For the free version, using Gemini 1.5 Flash (or adjust to "gemini-1.5" if required)
model = genai.GenerativeModel("gemini-1.5-flash")

# Call the API to generate content
response = model.generate_content("write a poetry about the moon.")
print(response.text)






















# from agents import Agent, Runner
# from dotenv import load_dotenv
# from agents import set_default_openai_key
# import os
# load_dotenv()

# openai_api_key = str(os.getenv("OPENAI_API_KEY"))
# set_default_openai_key(openai_api_key)



# agent = Agent(
#     name="Assistant", 
#     instructions="You are a helpful assistant", 
#     model="gpt-3.5-turbo"
# )




# result = Runner.run_sync(agent, "Write a haiku about recursion in programming.")


# print(result.final_output)





