const { Router } = require("express");
const {insertLettura,listLetture,getLettura,updateLettura,deleteLettura} = require("./lettura.dao")

const router = Router()

router.get("/", async (req,res) => {
    const lista = listLetture();
    res.json(lista);
})
router.put('/', async (req,res) =>{
    const lettura= await updateLettura(req.body.previsione,req.body.dataora,req.body.provincia)
    res.json(lettura)
})
router.post('/', async (req,res) =>{
    const lettura= await insertLettura(req.body)
    res.json(lettura)
})
router.delete('/', async (req,res) =>{
const lettura = await deleteLettura({ id: previsione.id });
  res.json(lettura)
})

module.exports = router