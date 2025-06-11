# Quiz Application API

A FastAPI-based REST API for managing quiz questions and their choices. This application allows you to create, retrieve, and manage quiz questions with multiple-choice answers.

## Features

- Create questions with multiple choices
- Retrieve questions by ID
- Get choices for a specific question
- Add new choices to existing questions
- PostgreSQL database integration
- Environment variable configuration

## Prerequisites

- Python 3.7+
- PostgreSQL
- pip (Python package manager)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd quiz-application
```

2. Create a virtual environment and activate it:

```bash
python -m venv .venv
# On Windows
.venv\Scripts\activate
# On Unix or MacOS
source .venv/bin/activate
```

3. Install the required packages:

```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the root directory with the following content:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
```

## Project Structure

```
quiz-application/
├── .env                    # Environment variables
├── database.py            # Database configuration
├── main.py               # FastAPI application and routes
├── models.py             # SQLAlchemy models
└── requirements.txt      # Project dependencies
```

## API Endpoints

### Questions

#### Create a Question

```http
POST /question
```

Request body:

```json
{
  "question_text": "What is FastAPI?",
  "choices": [
    {
      "choice_text": "A Python web framework",
      "is_correct": true
    },
    {
      "choice_text": "A database",
      "is_correct": false
    }
  ]
}
```

#### Get a Question

```http
GET /question/{question_id}
```

### Choices

#### Get Choices for a Question

```http
GET /question/{question_id}/choices
```

#### Add a Choice to a Question

```http
POST /question/{question_id}/choices
```

Request body:

```json
{
  "choice_text": "A new choice",
  "is_correct": false
}
```

## Database Schema

### Questions Table

- `id` (Integer, Primary Key)
- `question_text` (String)

### Choices Table

- `id` (Integer, Primary Key)
- `choice_text` (String)
- `question_id` (Integer, Foreign Key)
- `is_correct` (Boolean)

## Running the Application

1. Make sure PostgreSQL is running and the database is created.

2. Start the FastAPI server:

```bash
uvicorn main:app --reload
```

3. Access the API documentation at:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Error Handling

The API includes comprehensive error handling for:

- Invalid request data (422 Unprocessable Entity)
- Resource not found (404 Not Found)
- Server errors (500 Internal Server Error)

## Dependencies

- FastAPI
- SQLAlchemy
- psycopg2-binary
- python-dotenv
- uvicorn

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
