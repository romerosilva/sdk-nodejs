
![SDK Node MErcado Pago](https://github.com/lucmkz/sdk-nodejs/assets/31546923/f0e9b85d-1a9f-4c04-a958-0e8f855fe792)

# Mercado Pago SDK for NodeJS

[![NPM Version](https://img.shields.io/npm/v/mercadopago.svg)](http://npmjs.com/package/mercadopago)
[![Downloads](https://img.shields.io/npm/dt/mercadopago.svg)](http://npmjs.com/package/mercadopago)
[![License](https://img.shields.io/apm/l/vim-mode)](https://github.com/mercadopago/sdk-nodejs)

This library provides developers with a simple set of bindings to help you integrate Mercado Pago API to a website and start receiving payments.

## 💡 Requirements

The SDK Supports NodeJS version 12 or higher.

## 📲 Installation 

First time using Mercado Pago? Create your [Mercado Pago account](https://www.mercadopago.com), if you don’t have one already.

1. Install NodeJS SDK for MercadoPago running in command line:
```sh
$ npm install --save mercadopago
```

2. Copy the access_token in the [credentials](https://www.mercadopago.com/developers/en/docs/your-integrations/credentials) section of the page and replace YOUR_ACCESS_TOKEN with it.

That's it! Mercado Pago SDK has been successfully installed.

## 🌟 Getting Started

  Simple usage looks like:

```javascript
// Step 1: Import the parts of the module you want to use
import MercadoPago, { CardToken } from 'mercadopago';

// Step 2: Initialize the client object
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000, idempotencyKey: 'abc' } });

// Step 3: Initialize the API object
const cardToken = new CardToken(client);

// Step 4: Create the request object
const body = {
	card_id : 'card_id',
	security_code : 'security_code'
};

// Step 5: Make the request
cardToken.create({ cardTokenBody : body })
	.then((result) => console.log(result));
```

### Step 1: Import the parts of the module you want to use

Import `MercadoPago` and API objects from the MercadoPago module. 

``` javascript
import MercadoPago, { CardToken } from 'mercadopago';
```

### Step 2: Initialize the client object

Initialize the client object, passing the following:
- `accessToken`: Application's private key.
- `options`: These are optional fields,
  - `timeout`: Are the timeout of requests
  - `idempotencyKey`: [Idempotency](https://en.wikipedia.org/wiki/Idempotence) Is for retrying requests without accidentally performing the same operation twice

For example:

``` javascript
const client = new MercadoPago({ accessToken: 'access_token', options: { timeout: 5000, idempotencyKey: 'abc' } });
```

### Step 3: Initialize the API object

Initialize the API object you want to use, passing the `client` object from the previous step. 

``` javascript
const cardToken = new CardToken(client);
```

### Step 4: Create the request object

Create a the request object. For example, for a request to the `/v1/card_tokens` endpoint:

``` javascript
  const body = {
	card_id : 'card_id',
	security_code : 'security_code'
};
```

### Step 5: Make the request

Use the API object's method to make the request. For example, to make a request to the `/v1/card_tokens` endpoint using the `CardToken` object:

```
cardToken.create({ cardTokenBody : body })
	.then((result) => console.log(result))
  .catch(error => console.log(error));
```

## 📚 Documentation 

Visit our Dev Site for further information regarding:
 - Payments APIs: [Spanish](https://www.mercadopago.com.ar/developers/es/guides/payments/api/introduction/) / [Portuguese](https://www.mercadopago.com.br/developers/pt/guides/payments/api/introduction/)
 - Mercado Pago checkout: [Spanish](https://www.mercadopago.com.ar/developers/es/guides/payments/web-payment-checkout/introduction/) / [Portuguese](https://www.mercadopago.com.br/developers/pt/guides/payments/web-payment-checkout/introduction/)
 - Web Tokenize checkout: [Spanish](https://www.mercadopago.com.ar/developers/es/guides/payments/web-tokenize-checkout/introduction/) / [Portuguese](https://www.mercadopago.com.br/developers/pt/guides/payments/web-tokenize-checkout/introduction/)

Check our [official code reference](https://mercadopago.github.io/sdk-nodejs/) to explore all available functionalities.

## 🤝 Contributing

All contributions are welcome, ranging from people wanting to triage issues, others wanting to write documentation, to people wanting to contribute with code.

Please read and follow our [contribution guidelines](CONTRIBUTING.md). Contributions not following these guidelines will be disregarded. The guidelines are in place to make all of our lives easier and make contribution a consistent process for everyone.

### Patches to version 1.x.x

Since the release of version 2.0.0, version 1 is deprecated and will not be receiving new features, only bug fixes. If you need to submit PRs for that version, please do so by using develop-v1 as your base branch.

## ❤️ Support 

If you require technical support, please contact our support team at our developers
site: [English](https://www.mercadopago.com/developers/en/support/center/contact)
/ [Portuguese](https://www.mercadopago.com/developers/pt/support/center/contact)
/ [Spanish](https://www.mercadopago.com/developers/es/support/center/contact)

## 🏻 License 

```
MIT license. Copyright (c) 2023 - Mercado Pago / Mercado Libre 
For more information, see the LICENSE file.
```
