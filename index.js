const express = require('express')
const bodyParser = require("body-parser");

const routerAuth = require("./routers/auth.js");
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/auth", routerAuth)
app.listen(port);