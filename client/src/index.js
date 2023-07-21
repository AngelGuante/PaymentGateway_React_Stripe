import React from "react"
import { createRoot } from 'react-dom/client'
import Stripe_Prebuild_Payment from './components/Stripe_Prebuild_Payment'

function App() {
    return (
        <Stripe_Prebuild_Payment />
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)