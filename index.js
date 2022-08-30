const express = require('express')
const os = require('os')
const app = express()

const port = process.env.PORT || 3000

app.get('/',(req,res) => {
    res.status(200).json({ msg: 'API - 6.0.0', os:os.hostname(), valor:Math.random() })
})

app.listen(port,() => console.log(`SERVIDOR ONLINE - ${port}`))