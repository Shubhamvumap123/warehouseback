const mongoose = require("mongoose");

const Warehouse = mongoose.Schema({
    warehouse_id:{type:Number,required:true},
    warehouse_name:{type:String,required:true},
    subwarehouse_id:{type:Number,required:true},
    subwarehouse_name:{type:String,required:true}
},
{
    timestamps: true,
    versionKey: false
}
);
// console.log("model28")

const Warehousedata = mongoose.model("Warehouse",Warehouse)
module.exports= Warehousedata ;

