const express = require('express')
const app = express()
const port = 5000


app.get('/users', (req, res) => {
    var responseData = {
        name: "Ali",
        Age: 23,
        ID: 24234,

    }
    res.send(responseData)
  })
  



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })



















