# Todo App

This is a simple Todo application built using Django for the backend, React for the frontend, and styled with Tailwind CSS. It allows users to perform CRUD (Create, Read, Update, Delete) operations on their Todo list.

## Features
- User authentication
- Create a new todo item
- View all todo items
- Update existing todo items
- Delete todo items

## Technologies Used
- Django
- Django REST framework
- React
- Tailwind CSS

## Setup Instructions
1. Clone the repository:
```
git clone <repository-url>
```

2. Install dependencies for Django backend:
```
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

3. Install dependencies for React frontend:
```
cd frontend
npm install
npm run dev
```

4. Access the application in your browser:
```
http://localhost:5173/
```

## Additional Notes
- Make sure to configure the database settings in `backend/settings.py` according to your setup.
- This app uses Django REST framework for API endpoints.
- Tailwind CSS is used for styling the frontend components.

Feel free to explore and customize the application further according to your needs!
