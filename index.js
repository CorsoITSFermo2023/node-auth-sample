const express = require('express')
const bodyParser = require('body-parser');

const { insertPrevisione, getPrevisione, updatePrevisione, listPrevisioni, deletePrevisione } = require("./previsione.dao");
const port = 3000;
const app = express();


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


PUT     - Modifica revisione
GET     - Previsione(giornaliera)
DELETE  - Previsione
GET     - Previsione nei prossimi x giorni


app.post('/', async (req, res) => {
    
  });
*/

app.get('/', function (req, res) {
    const risposta = {
      message: 'Benvenuti tutti, meteo'
    };
    res.json(risposta)
  });

app.use(bodyParser.json())

app.post('/previsione', async (req, res) => {
    const newpre= await insertPrevisione(req.body)
    res.json(newpre)
})

app.get('/previsione/:idPrevisione', async (req, res) => {
    const prev = await getPrevisione({ id: req.params.idPrevisione });
    res.json(prev)
});

app.delete('/previsione/:idPrevisione', async (req, res) => {
    const prev = await deletePrevisione({ id: req.params.idPrevisione });
    const risposta={
        message: "Previsione eliminata"
    }
    res.json(risposta)
});

app.put('previsione/:idPrevisione', async (req, res) => {
    const aggiornati = await updatePrevisione(req.body, { id: req.params.idPrevisione });
});


/*
app.put('previsione/:idPrevisione', async (req, res) => {
    const aggiornati = await updatePrevisione({  }, { id: req.params.idPrevisione });
});

app.get('/previsione/:idPrevisione', async (req, res) => {
    const prev = await getPrevisione({ id: req.params.idPrevisione });
    res.json(prev)
});
*/



app.listen(port)
  
  