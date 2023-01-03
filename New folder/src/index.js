const express = require("express")
const warehouseController = require('./controllers/warehouseController')
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())
app.use("/warehouse",warehouseController)

module.exports = app ;