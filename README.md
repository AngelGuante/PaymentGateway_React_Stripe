## Payment Gateway Using Node.js and React

This is a Demonstration project for the Payment Gateway Stripe, with Node.js and React. All the content on this project uses the Stripe official documentation
* https://stripe.com/docs/checkout/quickstart
* https://stripe.com/docs/payments/quickstart

## Install dependencies (Both projects)

```
npm run install
```

## Create environment variables

* Create .env file on './server'
* Add next variables:
  ```
  APP_SERVER_DOMAIN_URL=http://localhost:3001
  REACT_APP_CLIENT_DOMAIN_URL=http://localhost:3000
  REACT_APP_API_KEY_STRIPE=<Your_stripe_api_key>
  ```
  
## Start projects
```
npm start
```

## Test

```
Payment succeeds                        4242 4242 4242 4242
Payment requires authentication         4000 0025 0000 3155
Payment is declined                     4000 0000 0000 9995
```
