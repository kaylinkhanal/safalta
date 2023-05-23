const express = require('express')
const app = express()
const port = 8000
require('dotenv').config()
const userRoute=require('./routes/user')
const dbConnect = require('./db/dbConnect')

dbConnect()
app.use(express.json());
app.use("/",userRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







