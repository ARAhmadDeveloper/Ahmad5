import pymongo

client = pymongo.MongoClient("mongodb+srv://arahmaddeveloper:L7gXT6l69RATJOUX@mongowithpython.fdo0wtp.mongodb.net/FirstDBWithPython")

db = client["mongowithpython"]

collection = db["students"]


