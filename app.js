const express = require('express');
const dotenv = require('dotenv');
const router = require("./routes/index.js");
const app = express();
dotenv.config();

app.use(express.json());
app.use(router);

const host = process.env.HOST;
const port = process.env.PORT;

app.listen(port, host, () => {
    console.log("Servidor está ouvindo em http://" + host + ":" + port);
});