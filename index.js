const express = require('express')
const bodyParser = require("body-parser");
const { listenerCount } = require("process");

const { insertPrevisione, getPrevisione, updatePrevisione, listPrevisioni, deletePrevisione } = require("./previsione.dao");
const routerAllerta = require("./allerta.js")
const routerLettura = require("./lettura.js")
const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/allerta",routerAllerta)
app.use("/lettura",routerLettura)
/*

{
    "previsione": "nuvoloso",
    "temperatura": 23.5,
    "umidita": 23,
    "uv": 44,
    "data": "2023-04-23",
    "fascia_oraria": "16-18",
    "provincia": "MC"
}

Metodi 1- Previsione:



GET     - Previsione(giornaliera)
GET     - Previsione nei prossimi x giorni


app.post('/', async (req, res) => {
    
  });
*/


//home
app.get('/', function (req, res) {
    const risposta = {
      message: 'Benvenuti tutti, meteo'
    };
    res.json(risposta)
  });

app.use(bodyParser.json())


//inserisci previsione
app.post('/previsione', async (req, res) => {
    const newpre= await insertPrevisione(req.body)
    res.json(newpre)
})

//get previsione
app.get('/previsione/:idPrevisione', async (req, res) => {
    const prev = await getPrevisione({ id: req.params.idPrevisione });
    res.json(prev)
});

//elimina previsione
app.delete('/previsione/:idPrevisione', async (req, res) => {
    const prev = await deletePrevisione({ id: req.params.idPrevisione });
    const risposta={
        message: "Previsione eliminata"
    }
    res.json(risposta)
});

//modifica revisione
app.put('/previsione/:idPrevisione', async (req, res) => {
    const aggiornati = await updatePrevisione(req.body, { id: req.params.idPrevisione });
    const risposta={
        message: "Previsione aggiornata"
    }
    res.json(risposta)
});


app.get('/previsione/giornaliera/:prevData', async (req, res) => {
    const lista =await listPrevisioni({data: req.params.prevData})
    res.json(lista)
});


app.get('/previsione/futura/:prevData', async (req, res) => {
    
    const listafutura=[]
    const datasplit= req.params.prevData.split("-")

    for(let i=1;i<8;i++){
        let nuovadata= [].concat(datasplit)
        const giorno= parseInt(nuovadata[2])+i
        nuovadata[2]=giorno
        nuovadata=nuovadata.join('-')
        const lista =await listPrevisioni({data: nuovadata})        
        listafutura.push(lista)
    }
    
    res.json(listafutura)
});




app.listen(port)