import json




def load_videos(videos):
    pass


def add_video(videos):
    pass

def update_video(videos):
    pass

def remove_video(videos):
    pass

def view_all_videos(videos):
    pass








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
        

main()