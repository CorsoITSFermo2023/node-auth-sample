const { Router } = require("express");
const {insertLettura,listLetture,getLettura,updateLettura,deleteLettura} = require("./lettura.dao")

const router = Router()

//"devi fare solo l'ultimo get, non ho tempo da perdere su quello" - shark
//kk= fixato da me - v
//kkn= nuovo -v


//kk - url
router.get("/list", async (req,res) => {
    const lista = await listLetture({1:1});
    res.json(lista);
})

//kkn - farebbe comodo una lista per provincia
router.get("/list/:prov", async (req,res) => {
    const lista = await listLetture({provincia:req.params.prov});
    res.json(lista);
})

//kk - ??????? update senza niente- cosa updati?
router.put('/:id', async (req,res) =>{
    const lettura= await updateLettura({id:req.params.id})
    res.json(lettura)
})

//kk - non serve l'id, lo mette da solo. Poi che senso ha mettere l'id sull'url
router.post('/', async (req,res) =>{
    const lettura= await insertLettura(req.body)
    res.json(lettura)
})

//kk - id messo male
router.delete('/:id', async (req,res) =>{
    const lettura = await deleteLettura({ id: req.params.id });
    res.json(lettura)
})

//kkn - lettura per provincia; format dataora= oo-aaaa-mm-gg 
router.get("/:prov/:dataor", async (req,res) => {
    const bruh = await getLettura({dataora:req.params.dataor,provincia:req.params.prov})
    if(bruh){
        res.json(bruh);
    }else{
        let ds= req.params.dataor.split("-")
        ds.splice(0,1)
        const data=ds.join("-")
        res.redirect('/previsione/giornaliera/'+req.params.prov+'/'+data)
    }

})


module.exports = router