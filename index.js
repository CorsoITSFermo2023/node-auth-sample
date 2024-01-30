const express = require('express')
const bodyParser = require("body-parser");
const cookieSession = require('express-session')
const routerAuth = require("./routers/auth.js");
const routerUser = require("./routers/user.js");
const routerSession = require("./routers/session.js");
const initStruct = require('./init-struct.js');
const authMiddleware = require('./middlewares/auth.js');
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/auth", routerAuth);
app.use("/user", authMiddleware, routerUser);
app.use("/cookies", cookieSession({ secret: 'suhabwe', cookie: { maxAge: 60000 } }), routerSession);
initStruct();
app.listen(port);