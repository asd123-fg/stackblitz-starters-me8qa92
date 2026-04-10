const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

// dataset
let students = [
  { id: 1, name: "qnz", yearLevel: 2 },
  { id: 2, name: "ez", yearLevel: 2 },
  { id: 3, name: "quz", yearLevel: 2 }
]

// GET students
app.get('/api/students', (req, res) => {
  res.json(students)
})

// POST student
app.post('/api/students', (req, res) => {
  const { name, yearLevel } = req.body

  if (!name || !yearLevel) {
    return res.status(400).json({ message: "Missing fields" })
  }

  const newStudent = {
    id: students.length + 1,
    name,
    yearLevel
  }

  students.push(newStudent)

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})