const express = require('express');
const app = express();
const port = 8080;


app.use(express.json());


let students = [
  { id: 1, name: "Ketan patil", branch: "IT" },
  { id: 2, name: "Raj shamani", branch: "CSE" },
  { id: 3, name: "Viru bhaskar", branch: "ECE" }
];


app.get('/students', (req, res) => {
  res.json(students);
});

app.post('/students', (req, res) => {
  const newStudent = {
    id: students.length + 1,
    name: req.body.name,
    branch: req.body.branch
  };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
