# 🎓 Quiz Application API

Welcome to the **Quiz Application API** – a modern, robust, and scalable backend for managing quiz questions and multiple-choice answers, built with FastAPI and SQLAlchemy.

---

## 🚀 Features

- **Create Questions**: Add new quiz questions with multiple choices.
- **Add Choices**: Add choices to existing questions.
- **Retrieve Questions**: Get questions and their associated choices.
- **PostgreSQL Integration**: Reliable and production-ready database support.
- **Environment Configuration**: Secure and flexible with `.env`.
- **Automatic Table Creation**: Tables are created automatically on startup.

---

## 🗂️ Project Structure

```
.
├── main.py           # FastAPI app and endpoints
├── models.py         # SQLAlchemy models for Questions and Choices
├── database.py       # Database connection and table creation
├── requirements.txt  # Python dependencies
├── .env              # Environment variables (not committed)
└── README.md         # Project documentation
```

---

## 📦 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Create and activate a virtual environment**

   ```bash
   python -m venv .venv
   # Windows
   .venv\Scripts\activate
   # macOS/Linux
   source .venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Configure environment variables**

   - Create a `.env` file:
     ```env
     DATABASE_URL=postgresql://username:password@localhost:5432/your_db
     ```

5. **Run the application**

   ```bash
   uvicorn main:app --reload
   ```

6. **Access API docs**
   - Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
   - ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)

---

## 🛠️ API Endpoints

### ➕ Create a Question

`POST /question`

```json
{
  "question_text": "What is FastAPI?",
  "choices": [
    { "choice_text": "A Python web framework", "is_correct": true },
    { "choice_text": "A database", "is_correct": false }
  ]
}
```

### 📖 Get a Question

`GET /question/{question_id}`

### 📋 Get Choices for a Question

`GET /question/{question_id}/choices`

### ➕ Add a Choice to a Question

`POST /question/{question_id}/choices`

```json
{
  "choice_text": "A new choice",
  "is_correct": false
}
```

---

## 🗄️ Database Schema

**Questions Table**

- `id`: Integer, Primary Key
- `question_text`: String

**Choices Table**

- `id`: Integer, Primary Key
- `choice_text`: String
- `question_id`: Integer, Foreign Key to Questions
- `is_correct`: Boolean

---

## ⚠️ Error Handling

- **422 Unprocessable Entity**: Invalid request data.
- **404 Not Found**: Resource does not exist.
- **500 Internal Server Error**: Server-side error.

---

## 🧩 Dependencies

- FastAPI
- SQLAlchemy
- psycopg2-binary
- python-dotenv
- uvicorn
- pydantic

---

## 🤝 Contribution

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to your branch
5. Create a Pull Request

---

## 📜 License

This project is licensed under the MIT License.

---

<div align="center">
  <h2 style="color:#4F8EF7; font-family:monospace; letter-spacing:2px;">
    ✨ Developed with ❤️ by <span style="color:#F76C6C; font-weight:bold;">ARAhmadDeveloper</span> ✨
  </h2>
</div>
