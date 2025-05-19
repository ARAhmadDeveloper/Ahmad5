import json


file_name = "youtube.txt"

def load_videos():
    try:
        with open(file_name, "r") as file:
            videos = json.load(file)
            return videos
    except FileNotFoundError:
        return []


def save_video_helper(videos):
    with open(file_name, "w") as file:
        json.dump(videos, file)
        
def view_all_videos(videos):
    for i, video in enumerate(videos, start=1):
        print("--------------------------------")
        print(f"{i}. Name = {video['name']} - Time = {video['time']}")
        print("--------------------------------")
        

def add_video(videos):
    name = input("Enter the video name: ")
    time = input("Enter the video time: ")
    videos.append({"name": name, "time": time})
    save_video_helper(videos)

def update_video(videos):
    view_all_videos(videos)
    index = int(input("Enter the index of the video to update: "))
    if index < 1 or index > len(videos):
        print("Invalid index")
        return
    name = input("Enter the new video name: ")
    time = input("Enter the new video time: ")
    videos[index - 1] = {"name": name, "time": time}
    save_video_helper(videos)

def remove_video(videos):
    view_all_videos(videos)
    index = int(input("Enter the index of the video to remove: "))
    del videos[index - 1]
    save_video_helper(videos)









def main():
    videos = load_videos()
    while True:
        print("Youtube Manager")
        print("1. Add a video")
        print("2. Update a video")
        print("3. Remove a video")
        print("4. View all videos")
        print("5. Exit")
        choice = input("Enter your choice: ")
        # print("--------------------------------")
        # print(videos)
        # print("--------------------------------")
        
        
        match choice:
            case "1":
                add_video(videos)
            case "2":
                update_video(videos)
            case "3":
                remove_video(videos)
            case "4":
                view_all_videos(videos)
            case "5":
                break
            case _:
                print("Invalid choice")
        
if __name__ == "__main__":
    main()
        