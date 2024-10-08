const express = require('express');
const app = express();
app.use(express.json());

let courses = [
    { id: 1, title: 'Introduction to Python', description: 'Learn Python basics', duration: '4 weeks' },
    { id: 2, title: 'Introduction to Java', description: 'Learn Java basics', duration: '5 weeks' },
];

// Get all courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// Add a new course
app.post('/courses', (req, res) => {
    const newCourse = { id: Date.now(), ...req.body };
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

// Update a course by ID (PUT)
app.put('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const courseIndex = courses.findIndex(course => course.id === courseId);
    if (courseIndex !== -1) {
        courses[courseIndex] = { ...courses[courseIndex], ...req.body };
        res.json(courses[courseIndex]);
    } else {
        res.status(404).json({ message: "Course not found" });
    }
});


// Delete a course by ID
app.delete('/courses/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    courses = courses.filter(course => course.id !== courseId);
    res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

