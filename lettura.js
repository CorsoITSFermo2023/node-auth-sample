const { Router } = require("express");
const {insertLettura,listLetture,getLettura,updateLettura,deleteLettura} = require("./lettura.dao")

const router = Router()

router.get("/", async (req,res) => {
    const lista = await listLetture({1:1});
    res.json(lista);
})
router.put('/:idLettura', async (req,res) =>{
    const lettura= await updateLettura(req.body, { id: req.params.idLettura })
    res.json(lettura)
})
router.post('/', async (req,res) =>{
    const lettura= await insertLettura(req.body)
    res.json(lettura)
})
router.delete('/:idLettura', async (req,res) =>{
const lettura = await deleteLettura({ id: req.params.idLettura });
  res.json("tippoooo lettura eliminata cazzo ne so")
})

module.exports = router