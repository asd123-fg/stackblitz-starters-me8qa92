const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')))

//dataset
const students = [
    {
        id: 1,
        name: "qnz",
        yearLevel: 2,
    },
    {
        id: 2,
        name: "ez",
        yearLevel: 2,
    },
    {
        id: 3,
        name: "quz",
        yearLevel: 2,
    },
]

app.get('/api/students', (req, res) => {
    res.json(students)
})

app.post('/api/students', (req, res) => {
    const {name, yearLevel} = req.body
    const newStudent = {name, yearLevel}
    students.push(newStudent)

    res.json(201).json({
        message: "Student added Successfully",
        student: newStudent
    })
})

app.listen(port, () => {
    console.log('Server running on http://localhost:${port}')
    
})