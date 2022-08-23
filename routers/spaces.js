const { Router } = require("express");
const Space = require("../models").space;
const router = new Router();


// http :4000/spaces
//http --ignore-stdin :4000/spaces
//http://localhost:4000/spaces
router.get("/", async(req, res) => {
    try{
        const spaceResponse = await Space.findAll();
        console.log("spaceResponse", spaceResponse)
        res.send(spaceResponse);
    }catch(e){
        console.log("spaces error:",e.message);
        next(e);
    }
})



module.exports = router