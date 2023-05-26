const bodyParser = require("body-parser");
const { listenerCount } = require("process");
const { initStruct } = require("../web-server-sample/init-struct");
const { insertPrevisione, getPrevisione, updatePrevisione, listPrevisioni, deletePrevisione } = require("./dao/previsione.dao");
const {insertAllerta,listAllerte,getAllerta,updateAllerta,deleteAllerta} = require("./dao/allerta.dao")
const {insertLettura,listLetture,getLettura,updateLettura,deleteLettura} = require(".dao/lettura.dao")
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.put('/allerta/:', async (req,res) =>{
    const allerta= await updateAllerta(req.body.descrizione,req.body.inizio,req.body.fine)
    res.json(allerta)
})






initStruct().then(
    () =>listenerCount.port
)