const { Router } = require("express");
const {insertAllerta,listAllerte,getAllerta,updateAllerta,deleteAllerta} = require("./allerta.dao")

const router = Router()

router.post('/', async (req,res) =>{
    const allerta= await insertAllerta(req.body.descrizione,req.body.data_inizio,req.body.data_fine)
    res.json(allerta)
})

router.get('/', async (req,res) =>{
    const lista = await listAllerte({1:1});
    res.json(lista);
})

router.get('/:idAllerta', async (req,res) =>{
    const lista = await getAllerta(req.params.idAllerta);
    res.json(lista)
})

router.put('/:idAllerta', async (req,res) =>{
    const nuovo = updateAllerta(req.body,{ id: req.params.idAllerta})
    res.json("avvenuto aggiornamento")
})

router.put('/:idAllerta', async (req,res) =>{
    const nuovo = deleteAllerta(req.body,{ id: req.params.idAllerta})
    res.json("avvenuta rimozione")
})

module.exports = router