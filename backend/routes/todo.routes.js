const router = require('express').Router();

const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todo.controller');

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get('/', getTodos);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post('/', createTodo);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put('/:id', updateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete('/:id', deleteTodo);

module.exports = router;
