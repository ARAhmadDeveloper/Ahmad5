# 🎬 YouTube Video Manager & File Handling Project

Welcome to the **YouTube Video Manager & File Handling Project**! This project demonstrates practical Python skills in file handling and managing a simple YouTube video list using JSON. It is perfect for beginners and intermediate learners who want to understand file operations and basic CRUD (Create, Read, Update, Delete) operations in Python.

---

## 📁 Project Structure

```
AdvancePy_01/
│
├── fileHandling.py      # Demonstrates file writing in Python
├── youtube_manager.py   # CLI app to manage YouTube videos (CRUD)
├── youtube.txt          # Stores video data in JSON format
├── new.txt              # Output file for file handling demo
└── README.md            # Project documentation
```

---

## 🚀 Features

- **File Handling Demo**: Learn how to write text to files using Python's context manager.
- **YouTube Video Manager**:
  - Add, update, remove, and view videos with a simple command-line interface.
  - Data is stored in a JSON file (`youtube.txt`) for persistence.
- **Beginner Friendly**: Clean, well-commented code for easy understanding.

---

## 📝 File Descriptions

### `fileHandling.py`

- Demonstrates how to write multiple lines of text to a file (`new.txt`).
- Uses Python's `with` statement for safe file operations.

### `youtube_manager.py`

- A command-line tool to manage a list of YouTube videos.
- Supports:
  - Adding new videos
  - Updating existing videos
  - Removing videos
  - Viewing all videos
- Data is stored in `youtube.txt` as a JSON array.

### `youtube.txt`

- Stores the list of videos in JSON format. Example:
  ```json
  [
    { "name": "first update", "time": "11" },
    { "name": "python", "time": "55" }
  ]
  ```

### `new.txt`

- Output file created by `fileHandling.py`.
- Contains sample text written by the script.

---

## 💻 How to Run

1. **Clone the repository** (if not already):

   ```bash
   git clone <repo-url>
   cd AdvancePy_01
   ```

2. **Run the file handling demo:**

   ```bash
   python fileHandling.py
   ```

   - Check `new.txt` for the output.

3. **Run the YouTube Video Manager:**
   ```bash
   python youtube_manager.py
   ```
   - Follow the on-screen menu to add, update, remove, or view videos.
   - All data is saved in `youtube.txt`.

---


## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <b><span style="font-size:2em; color:#4F8EF7;">✨ ARAhmadDeveloper ✨</span></b><br>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=30&pause=1000&color=4F8EF7&center=true&vCenter=true&width=435&lines=Happy+Coding!" alt="Typing SVG" />
</p>
