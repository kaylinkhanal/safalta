const express = require('express')
const app = express()
const cors = require('cors')
const port = 8000
require('dotenv').config()
const userRoute=require('./routes/user')
const dbConnect = require('./db/dbConnect')
require('dotenv').config()

dbConnect()

app.use(express.json());
app.use(cors());


app.use("/",userRoute)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})







