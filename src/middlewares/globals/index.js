//GLOBAL MIDDLEWARES WILL BE INJECTED IN ALL ROUTES
module.exports = [
	require("./pagination.middleware"),
	require("./filters.middleware")
]