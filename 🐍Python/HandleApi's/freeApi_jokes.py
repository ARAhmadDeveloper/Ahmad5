# Free API Jokes

import requests

def Jokes():
    url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random"
    response = requests.get(url)
    joke = response.json()
    if joke['success'] and 'data' in joke:
        jokeData = joke['data']
        categories = jokeData['categories']
        id = jokeData['id']
        content = jokeData['content']
        return id, content, categories
    else:
        raise Exception("Failed to fetch username")
    
    

def main():
    try:
        id, content, categories = Jokes()
        print("--------------------------------")
        print(f"* categories: {categories}")
        print(f"* id: {id}")
        print(f"* content: {content}")
        print("--------------------------------")
    except Exception as e:
        print(str(f"Error: {e}"))

if __name__ == "__main__":
    main()











