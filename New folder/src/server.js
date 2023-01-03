const connect = require('./config/db')
const app = require('./index')
const warehouseController = require('./controllers/warehouseController')
const port = process.env.PORT || 5000

app.use("/warehouse",warehouseController)

app.listen(port,async()=>{
    try {
        await connect()
        console.log("Server is Listening at port " +port)
    } catch (error) {
        console.log(error)
    }
})