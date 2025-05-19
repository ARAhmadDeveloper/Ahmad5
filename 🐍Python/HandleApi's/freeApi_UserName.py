import requests

def get_username():
    url = "https://api.freeapi.app/api/v1/public/randomusers/user/random"
    response = requests.get(url)
    data = response.json()
    if data['success'] and 'data' in data:
        userData = data['data']
        userName = userData['login']['username']
        country = userData['location']['country']
        return userName, country
    else:
        raise Exception("Failed to fetch username")
    
    

def main():
    try:
        userName, country = get_username()
        print(f"Username: {userName}")
        print(f"Country: {country}")
    except Exception as e:
        print(str(f"Error: {e}"))

if __name__ == "__main__":
    main()



