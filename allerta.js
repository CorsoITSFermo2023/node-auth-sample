const { Router } = require("express");
const {insertAllerta,listAllerte,getAllerta,updateAllerta,deleteAllerta} = require("./allerta.dao")

const router = Router()

router.post('/allerta', async (req,res) =>{
    const allerta= await insertAllerta(req.body.descrizione,req.body.data_inizio,req.body.data_fine)
    res.json(allerta)
})

router.get('/allerta', async (req,res) =>{
    const lista = await listAllerte();
    res.json(lista)
})

router.get('/allerta/:idAllerta', async (req,res) =>{
    const lista = await getAllerta(req.params.idAllerta);
    res.json(lista)
})

router.put('/allerta/idAllerta', async (req,res) =>{
    const nuovo = updateAllerta(req.body,{ id: req.params.idAllerta})
    res.json("avvenuto aggiornamento")
})

router.put('/allerta/idAllerta', async (req,res) =>{
    const nuovo = deleteAllerta(req.body,{ id: req.params.idAllerta})
    res.json("avvenuta rimozione")
})

module.exports = router