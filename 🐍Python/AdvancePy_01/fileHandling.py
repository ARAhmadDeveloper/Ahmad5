# file = open("new.txt", "w")

# try:
#     file.write("Hello, World!")
# except:
#     print("Error: Could not write to file")
# finally:
#     file.close()


with open("new.txt", "w") as file:
    file.write("Hello, Python! \n This is a new file. \n Hello, World! \n This is TXT file. \n Hello File! \n ")
    

