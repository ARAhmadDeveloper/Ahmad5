import pymongo
import os
from dotenv import load_dotenv

load_dotenv()  # Load environment variables from .env file

client = pymongo.MongoClient(os.getenv('MONGODB_URI'))


db = client["mongowithpython"]

collection = db["students"]


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
    
# Delete and update videos on the basis of index
def update_video(title, description, video_id):
    collection.update_one(
        {"video_id": video_id},
        {"$set": {"title": title, "description": description}}
        )
    print("....updating video....")
    print(f"Video {title} updated successfully.")
    
def delete_video(video_id):
    collection.delete_one(
        {"video_id": video_id}
        )
    print("....deleting video....")
    print(f"Video {video_id} deleted successfully.")
    
    



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
            video_id = input("Enter Video ID: ")
            title = input("Enter Video Title: ")
            description = input("Enter Video Description: ")
            update_video(title, description, video_id)
        elif choice == "4":
            video_id = input("Enter Video ID: ")
            delete_video(video_id)
        elif choice == "5":
            break
        else:
            print("Invalid choice. Please try again.")


if __name__ == "__main__":
    main()
