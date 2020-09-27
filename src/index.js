const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors");

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json())

//applicable only on get requests
app.get("*",require("./middlewares/globals"));

app.use('/api',require("./routes"));

app.listen(process.env.APP_PORT || 4000, () => {
    console.info(`Server listening ${process.env.APP_PORT || 4000}`);
});

