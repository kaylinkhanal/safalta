const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const userRoute=require('./routes/user')
const itemRoute=require('./routes/item')
const dbConnect = require('./db/dbConnect')

dbConnect()
app.use(express.json());
app.use(cors());


app.use("/",userRoute)
app.use("/",itemRoute)



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})







