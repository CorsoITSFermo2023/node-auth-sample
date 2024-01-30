const express = require('express')
const bodyParser = require("body-parser");

const routerAuth = require("./routers/auth.js");
const routerUser = require("./routers/user.js");
const initStruct = require('./init-struct.js');
const authMiddleware = require('./middlewares/auth.js');
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/auth", routerAuth);
app.use("/user", authMiddleware, routerUser);
initStruct();
app.listen(port);