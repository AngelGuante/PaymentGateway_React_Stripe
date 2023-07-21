const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log('Server running at http://localhost:3000')
})

app.get('/', (req, res) => {
    res.send('')
})
