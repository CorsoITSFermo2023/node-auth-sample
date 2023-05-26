const { Router } = require("express");
const {insertAllerta,listAllerte,getAllerta,updateAllerta,deleteAllerta} = require("./allerta.dao")

const router = Router();

router.put('/allerta/:', async (req,res) =>{
    const allerta= await updateAllerta(req.body.descrizione,req.body.data_inizio,req.body.data_fine)
    res.json(allerta)
})

module.exports = router