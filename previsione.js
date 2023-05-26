const { Router } = require("express");
const bodyParser = require("body-parser");
const { insertPrevisione, getPrevisione, updatePrevisione, listPrevisioni, deletePrevisione } = require("./previsione.dao");

const router = Router();
router.use(bodyParser.json())
//inserisci previsione
router.post('/', async (req, res) => {
    const newpre= await insertPrevisione(req.body)
    res.json(newpre)
})

//get previsione
router.get('/:idPrevisione', async (req, res) => {
    const prev = await getPrevisione({ id: req.params.idPrevisione });
    if(!prev) {
        res.status(404);
    }
    res.json(prev)
});

//lista per provincia
router.get('/list/:prov', async (req, res) => {
    const prev = await listPrevisioni({provincia:req.params.prov});
    res.json(prev)
});

//elimina previsione
router.delete('/:idPrevisione', async (req, res) => {
    const prev = await deletePrevisione({ id: req.params.idPrevisione });
    const risposta={
        message: "Previsione eliminata"
    }
    res.json(risposta)
});

//modifica revisione
router.put('/:idPrevisione', async (req, res) => {
    const aggiornati = await updatePrevisione(req.body, { id: req.params.idPrevisione });
    const risposta={
        message: "Previsione aggiornata"
    }
    res.json(risposta)
});

//previsione giornaliera
router.get('/giornaliera/:prov/:prevData', async (req, res) => {
    const lista =await listPrevisioni({data: req.params.prevData,provincia:req.params.prov})
    res.json(lista)
});

//previsioni future
router.get('/futura/:prov/:prevData', async (req, res) => {
    
    const listafutura=[]
    const datasplit= req.params.prevData.split("-")

    for(let i=1;i<8;i++){
        let nuovadata= [].concat(datasplit)
        const giorno= parseInt(nuovadata[2])+i
        nuovadata[2]=giorno
        nuovadata=nuovadata.join('-')
        const lista =await listPrevisioni({data: nuovadata,provincia:req.params.prov})        
        listafutura.push(lista)
    }
    
    res.json(listafutura)
});


module.exports= router