const respond = (res, { data = null, message = 'Undefined error', code = 200, direct = false, logging = true, meta = false, meta_extra = {} }) => {
    let response = { "status": code };

    if (!direct) {

        if (code < 400) {
            response.data = data;

            if (meta && response.data) {
                if (typeof meta !== 'boolean' && Object.keys(meta)) {
                    response.meta = meta;
                } else {
                    response.meta = {
                        count: Array.isArray(response.data) ? response.data.length : response.data ? 1 : 0,
                        ...meta_extra
                    };
                }
            }
            
        } else {
            response.error = message;
        }
        
    } else {
        response = data;
    }

    res.status(code).send(response);
};

module.exports = respond;