const { Stripe_Prebuild_checkout } = require('./Stripe')
const express = require('express')
const app = express()

app.listen(3001, () => {
    console.log('Server running at http://localhost:3001')
})

app.get('/', (req, res) => {
    res.send('Stripe Demo')
})

app.get('/create-checkout-session', async (req, res) => {
    console.log('Payment')
    const session = Stripe_Prebuild_checkout()
    console.log(session.url)
    res.redirect(303, session.url)
})
