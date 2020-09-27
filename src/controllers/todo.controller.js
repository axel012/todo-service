const {TodoService} = require("../services");
const respond = require("../helpers/respond.helper");

const getAll = async (req,res,next) => {
	 try {
      const data = await TodoService.all(req);
      respond(res,data);
    } catch (e) {
      next(e);
    }
}

module.exports = {
	getAll
}