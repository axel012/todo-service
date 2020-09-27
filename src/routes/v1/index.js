const router = require('express').Router();

router.use('/todos', require('./todo.route'));

module.exports = router;