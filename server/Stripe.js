require("dotenv").config()
const stripe = require('stripe')(process.env.REACT_APP_API_KEY_STRIPE)

const Stripe_Prebuild_checkout = async () => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'T-shirt',
                    },
                    unit_amount: 2000,
                    tax_behavior: 'exclusive',
                },
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                    maximum: 10,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `http://localhost:3000?success=true`,
        cancel_url: `http://localhost:3000?canceled=true`,
    })
    return session
}

module.exports = { Stripe_Prebuild_checkout }