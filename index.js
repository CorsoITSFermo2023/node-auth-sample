const express = require('express')
const bodyParser = require("body-parser");
const { listenerCount } = require("process");

const routerPrevisione= require("./previsione.js")
const routerAllerta = require("./allerta.js")
const routerLettura = require("./lettura.js")
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.use("/allerta",routerAllerta)
app.use("/lettura",routerLettura)
app.use("/previsione",routerPrevisione)



//home
app.get('/previsione', async (req, res) => {
    const risposta = await listPrevisioni()})
app.get('/', function (req, res) {
    const risposta = {
      message: 'Benvenuti tutti, meteo'
    };
    res.json(risposta)
  });


app.listen(port)