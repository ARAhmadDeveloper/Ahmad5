# Free API Product
import requests

def get_username():
    url = "https://api.freeapi.app/api/v1/public/randomproducts/product/random"
    response = requests.get(url)
    data = response.json()
    if data['success'] and 'data' in data:
        userData = data['data']
        title = userData['title']
        description = userData['description']
        price = userData['price']
        brand = userData['brand']
        stock = userData['stock']
        category = userData['category']
        return title, description, price, brand, stock, category
    else:
        raise Exception("Failed to fetch username")
    
    

def main():
    try:
        title, description, price, brand, stock, category = get_username()
        print("--------------------------------")
        print(f"* title: {title}")
        print(f"* description: {description}")
        print(f"* price: {price}")
        print(f"* brand: {brand}")
        print(f"* stock: {stock}")
        print(f"* category: {category}")
        print("--------------------------------")
    except Exception as e:
        print(str(f"Error: {e}"))

if __name__ == "__main__":
    main()

