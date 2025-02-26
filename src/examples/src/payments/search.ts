/**
 * To know the possible parameters, go to the payments section and then to search payments
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference Documentation }.
 */

import MercadoPago, { Payments } from '@src/index';

const client = new MercadoPago({ accessToken: '' });

const payments = new Payments(client);

payments.search({
	criteria: 'asc'
}).then((result) => console.log(result.results[0]));
