const router = require('express').Router();
const API_VERSION = process.env.API_VERSION || "v1";
const respond = require("../helpers/respond.helper");

router.use(`/${API_VERSION}`, require(`./${API_VERSION}`));

router.use(function (req, res, next) {
    respond(res, {
        code: 404,
        message: "Not found",
    });
});

router.use(function (err, req, res, next) {
    console.log(err);
    respond(res, {
        code: err.code || 500,
        message: err,
    });
});

module.exports = router;