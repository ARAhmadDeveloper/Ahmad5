import pymongo
import os
from bson import ObjectId
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

client = pymongo.MongoClient(os.getenv('MONGODB_URI'))


db = client["mongowithpython"]

collection = db["Videos"]


def list_videos():
    print("Listing all videos...")
    videos = collection.find()
    for video in videos:
        print(video)
        
def add_video(title, description):
    video = {
        "title": title,
        "description": description
    }
    print("....inserting video....")
    collection.insert_one(video)
    print(f"Video {title} added successfully.")
    
# # Delete and update videos on the basis of ID's
# def update_video(_id, title, description):
#     collection.update_one(
#         {"_id": ObjectId(_id)},
#         {"$set": {"title": title, "description": description}}
#         )
#     print("....updating video....")
#     print(f"Video {title} updated successfully.")
    
    
# def delete_video(_id):
#     collection.delete_one(
#         {"_id": ObjectId(_id)}
#         )
#     print("....deleting video....")
#     print(f"Video {_id} deleted successfully.")
    


def update_video(_id, title, description):
    try:
        result = collection.update_one(
            {"_id": ObjectId(_id)},
            {"$set": {"title": title, "description": description}}
        )
        print("....updating video....")
        if result.modified_count:
            print(f"✅ Video {_id} updated successfully.")
        else:
            print(f"⚠️ Video {_id} not found or nothing was updated.")
    except Exception as e:
        print(f"❌ Error updating video: {e}")

def delete_video(_id):
    try:
        result = collection.delete_one({"_id": ObjectId(_id)})
        print("....deleting video....")
        if result.deleted_count:
            print(f"✅ Video {_id} deleted successfully.")
        else:
            print(f"⚠️ Video {_id} not found.")
    except Exception as e:
        print(f"❌ Error deleting video: {e}")


def main():
    print("Youtube Manager App")
    
    while True:
        print("\n1.List all videos")
        print("2.Add a new video")
        print("3.Update a video")
        print("4.Delete a video")
        print("5.Exit")
        
        choice = input("Enter your choice: ")
        
        if choice == "1":
            list_videos()
        elif choice == "2":
            title = input("Enter Video Title: ")
            description = input("Enter Video Description: ")
            add_video(title, description)
        elif choice == "3":
            _id = input("Enter Video ID for update: ")
            title = input("Enter Video Title for update: ")
            description = input("Enter Video Description for update: ")
            update_video(_id, title, description)
        elif choice == "4":
            _id = input("Enter Video ID for delete: ")
            delete_video(_id)
        elif choice == "5":
            print("Exiting the application...")
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
