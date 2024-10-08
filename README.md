# nagaed_assessment

## Project Overview

### Frontend (Contact Us Form)
A simple, responsive Contact Us form created using HTML, CSS, and JavaScript. It validates user input, displays a success message upon submission, and logs the input data to the console. The form is styled to have a modern, user-friendly design.

### Backend (RESTful API)
A RESTful API built using Node.js and Express.js that allows users to manage a list of courses with basic CRUD operations:
- Create a course
- Retrieve all courses
- Update a course by ID
- Delete a course by ID

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Version Control**: Git, GitHub

## Setup and Installation

### Prerequisites
- Node.js installed on your machine. You can download it from (https://nodejs.org/).
- A GitHub account to clone or fork the repository.

### Steps to Run Locally

1. **Clone the repository**:
   bash
   git clone https://github.com/yourusername/projectname.git
2. **Navigate to the project directory**:
   bash
   cd nagaed_assessment
3. **Open the index.html file in your web browser**.

4. **Running the Backend**
5. **Install dependencies**: npm init ,npm install
6. **Run the server**: npm server.js (The server will start running at http://localhost:3000)
   
7. ### You can test the API using curl commands or Postman.
    **Get all courses (GET request)**:
    bash
    curl -X GET http://localhost:3000/courses
   
    **Add a new course (POST request)**:
    bash
    curl -X POST http://localhost:3000/courses -H "Content-Type: application/json" -d "{\"title\":\"New Course\",\"description\":\"Learn something new\",\"duration\":\"6 weeks\"}"
   
    **Update a course by ID (PUT request)**:
    bash
    curl -X PUT http://localhost:3000/courses/1 -H "Content-Type: application/json" -d "{\"title\":\"Updated Course\"}"
   
    **Delete a course by ID (DELETE request)**:
    bash
    curl -X DELETE http://localhost:3000/courses/2
   
