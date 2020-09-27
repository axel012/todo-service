const {TodoController} = require("../../controllers");
const router = require("express").Router();

router.get("/",TodoController.getAll);

module.exports = router;