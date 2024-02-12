const express = require('express')

const app = express()


app.get('/', (req,res)=>{
  return res.status(200).json({
    message:'hello world'
  })
})

const port = process.env.port || 3000

app.listen(port, ()=>{
  console.log('app running at port: ' + port)
})