const mongoose = require("mongoose");

const Warehouse = mongoose.Schema({
    warehouse_id:{type:String,required:true},
    warehouse_name:{type:Number,required:false},
    subwarehouse_id:{type:Number},
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

