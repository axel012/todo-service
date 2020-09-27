const maxLimit = 1000;
//ADD PAGINATION CONSTANTS TO CURRENT FILTERS
const paginationMiddleware = (req,res,next)=>{
	const query = req.query;
	 const filters = {
        limit: query.limit ? Number(query.limit) : 15,
        page: query.page ? Number(query.page) : 1,
	};
	delete req.query.limit;
	delete req.query.page;
	//prevent quering a lot of data
	filters.limit = Math.min(maxLimit,filters.limit);
	req.filters = {...req.filters,...filters}
	next();
}

module.exports = paginationMiddleware;