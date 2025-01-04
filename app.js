const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const cors = require('cors')
const app = express()
const connectToDB = require('./db/db')
const userRoutes = require('./routes/user.routes')
const TransactionRoutes = require('./routes/Transaction.routes')

connectToDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/', (req, res)=>{
    res.send("hello wolrd")
})

app.use('/user',userRoutes)
app.use('/',TransactionRoutes )


module.exports = app 