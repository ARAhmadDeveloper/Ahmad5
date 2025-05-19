import sqlite3

dbConnection = sqlite3.connect('youtube.db')

cursor = dbConnection.cursor()

cursor.execute("""
    CREATE TABLE IF NOT EXISTS youtube (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            time TEXT NOT NULL
    )
"""
)


def listAllVideos():
    cursor.execute('''
    SELECT * FROM youtube
    ''')
    videos = cursor.fetchall()
    if videos == []:
        print("No videos found")
    else:
        print("--------------------------------")
        for video in videos:
            # print("--------------------------------")
            print(video)
            print("--------------------------------")

def addVideo(name, time):
    cursor.execute('''
                   INSERT INTO youtube (name, time) VALUES (?, ?)''', (name, time))
    dbConnection.commit()

def updateVideo(id, name, time):
    cursor.execute('''
    UPDATE youtube SET name = ?, time = ? WHERE id = ?
    ''', (name, time, id))
    dbConnection.commit()

def deleteVideo(id):
    if id == "" and id != id:
        print("Invalid id")
    else:
        cursor.execute('''
        DELETE FROM youtube WHERE id = ?
        ''', (id,))
        dbConnection.commit()




def main():
    while True:
        print("1. List All Videos: ")
        print("2. Add a Video: ")
        print("3. Update a Video: ")    
        print("4. Delete a Video: ")
        print("5. Exit: ")

        choice = input("Enter your choice: ")

        if choice == "1":
            listAllVideos()
        elif choice == "2":
            name = input("Enter the name of the video: ")
            time = input("Enter the time of the video: ")
            addVideo(name, time)
            print("Video added successfully")
        elif choice == "3":
            id = input("Enter the id of the video: ")
            name = input("Enter the name of the video: ")
            time = input("Enter the time of the video: ")
            updateVideo(id, name, time)
            print("Video updated successfully")
        elif choice == "4":
            id = input("Enter the id of the video: ")
            deleteVideo(id)
            print("Video deleted successfully")
        elif choice == "5":
            exit()
        else:
            print("Invalid choice")



if __name__ == "__main__":
    main()
