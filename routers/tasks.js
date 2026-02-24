const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasksController');

router.get('/',tasksController.getAllTasks);
router.post('/',tasksController.createTasks);
router.delete('/:id',tasksController.deleteTasks);
// Para actualizar una tarea, se utiliza el método PUT y se pasa el ID de la tarea a actualizar en la URL
router.put('/:id', tasksController.updateTask);

module.exports = router;