

const express = require("express")
const Warehousedata = require("../models/DataModel")
const router = express.Router()

router.get("/",async(req,res)=>{

    try {
        const {warehouse_id, warehouse_name,subwarehouse_id,subwarehouse_name} = req.query
        const query = {}
        if(warehouse_id){
         query.warehouse_id = warehouse_id
        }
        if(warehouse_name){
         query.warehouse_name = warehouse_name
        }
        if(subwarehouse_id){
            query.subwarehouse_id = subwarehouse_id
       
        }
        if(subwarehouse_name){
            query.subwarehouse_name = subwarehouse_name
       
        }
      
        const Warehouse = await Warehousedata.find(query)

     return res.status(200).json({success:true, Warehouse})
     

    } catch (error) {
        return res.status(500).send({message:error.message})
    }

})

module.exports = router
