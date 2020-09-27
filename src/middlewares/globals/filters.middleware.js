const filterMiddleware = (req,res,next)=>{
    const queries = req.query;
    for(const key of Object.keys(queries)){
        const query = queries[key];
        //Check if is a string
        if(isNaN(Number(query))){
            if(typeof query === "string"){
                const value = query;
                queries[key] = {"includes":value}//{$like:`%${value}%`}    
            }
        }else{
            queries[key] = Number(query);
        }
    }
	 
	req.filters = {...req.filters,...queries}
	next();
}

module.exports = filterMiddleware;