const fs = require('fs')
const path = require('path')

const tasksFile = path.join(__dirname, '../data/tasks.txt')

const readTasks = () => {
    try {
        if (!fs.exitsSync(tasksFile)) {
            return []

        }
        const data = fs.readFileSync(tasksFile, "utf-8")
        return data ? JSON.parse(data) : []
    } catch (err) {
        return []
    }
}

const saveTask = (tasks) => {
    fs.writeFileSync(tasksFile, JSON.stringify(tasks, null, 2))
}

exports.createTasks = (req, res) => {
    const newTask = {
        id: Date.now(),
        title: req.body.title,
        completed: true
    }
    const tasks = readTasks()
    tasks.push(newTask)
    saveTask(tasks)
    res.json(newTask)
}

exports.getAllTasks = (req, res) => {
    const tasks = readTasks()
    res.json(tasks)
}

exports.deleteTasks = (req, res) => {
    let tasks = readTasks()
    const id = parseInt(req.params.id)
    tasks = tasks.filter(tasks => tasks.id !== id)
    saveTask(tasks)
    res.json({ message: 'Tarea eliminada con éxito.' })
}