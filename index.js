const express = require('express')
const app = express()
const port = 3000

require('dotenv').config

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter',(req,res)=>{
   res.send("akash.com")
})

app.get('/login',(req,res)=>{
res.send("<h1> welcome to akash backend </h1>")
})

app.get('/signup',(req,res)=>{
   res.send("<h2> welcome to akash h2 backend </h2> ")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})