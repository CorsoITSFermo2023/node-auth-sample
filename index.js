const express = require('express')
const bodyParser = require("body-parser");
const { listenerCount } = require("process");

const { insertPrevisione, getPrevisione, updatePrevisione, listPrevisioni, deletePrevisione } = require("./previsione.dao");
const {insertAllerta,listAllerte,getAllerta,updateAllerta,deleteAllerta} = require("./allerta.dao")
const {insertLettura,listLetture,getLettura,updateLettura,deleteLettura} = require("./lettura.dao")
const port = 3000;
const app = express();

app.use(bodyParser.json());

app.put('/allerta/:', async (req,res) =>{
    const allerta= await updateAllerta(req.body.descrizione,req.body.inizio,req.body.fine)
    res.json(allerta)
})

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


app.get('/list', async (req, res) => {
    console.log(await listPrevisioni())
    const risposta={
        message: "Previsione eliminata"
    }
    res.json(risposta)
  });







app.listen(port)