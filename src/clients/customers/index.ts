import get from './get';
import create from './create';
import remove from './remove';
import update from './update';
import search from './search';

import type { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import type { Customer as CustomerObj } from './commonTypes';
import type { CustomerCreate } from './create/types';
import type { CustomerUpdate } from './update/types';
import type { CustomerSearchOptions, CustomerSearchResultsPage } from './search/types';
import { CustomerCard } from '@src/clients/customercards';
import type { CustomerCardCreate } from '../customercards/create/types';
import type { CustomerCardResponse } from '../customercards/commonTypes';
import type { CustomerCardIds } from '../customercards/get/types';
import type { CustomerCardId } from '../customercards/list/types';

/**
 * Mercado Pago Customer.
 *
 * @see {@link https://www.mercadopago.com.br/developers/pt/reference/cards/_customers_customer_id_cards/post Documentation }.
 */
export class Customer {
	private config: MercadoPagoConfig;
	private customerCard: CustomerCard;

	constructor(mercadoPagoConfig: MercadoPagoConfig) {
		this.config = mercadoPagoConfig;
		this.customerCard = new CustomerCard(mercadoPagoConfig);
	}

	/**
	 * Mercado Pago Customer create.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/create/create.ts Usage Example  }.
	 */
	create ({ body }: CustomerCreate): Promise<CustomerObj> {
		return create({ body, config: this.config });
	}

	/**
	 * Mercado Pago customer get.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/get/get.ts Usage Example  }.
	 */
	get(customerId: string): Promise<CustomerObj> {
		return get({ customerId, config: this.config });
	}

	/**
	 * Mercado Pago customer remove.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/remove/remove.ts Usage Example  }.
	 */
	remove(customerId: string): Promise<CustomerObj> {
		return remove({ customerId, config: this.config });
	}

	/**
	 * Mercado Pago customer update.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/update/update.ts Usage Example  }.
	 */
	update({ customerId, body }: CustomerUpdate): Promise<CustomerObj> {
		return update({ customerId: customerId, body, config: this.config });
	}

	/**
	 * Mercado Pago customer search.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/list/list.ts Usage Example  }.
	 */
	search(filters?: CustomerSearchOptions): Promise<CustomerSearchResultsPage> {
		return search({ filters, config: this.config });
	}

	/**
	 * Mercado Pago create card for customer.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/list/list.ts Usage Example  }.
	 */
	createCard({ customerId, customerCardBody }: CustomerCardCreate): Promise<CustomerCardResponse> {
		return this.customerCard.create({ customerId, customerCardBody });
	}

	/**
	 * Mercado Pago  get customer's card.
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/list/list.ts Usage Example  }.
	 */
	getCard({ customerId, cardId }: CustomerCardIds): Promise<CustomerCardResponse> {
		return this.customerCard.get({ customerId, cardId });
	}

	/**
	 * Mercado Pago remove customer's card .
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/list/list.ts Usage Example  }.
	 */
	removeCard({ customerId, cardId }: CustomerCardIds): Promise<CustomerCardResponse> {
		return this.customerCard.remove({ customerId, cardId: cardId });
	}

	/**
	 * Mercado Pago  list customer's cards .
	 *
	 * @see {@link https://github.com/mercadopago/sdk-nodejs/blob/master/src/examples/src/customer/list/list.ts Usage Example  }.
	 */
	listCards({ customerId }: CustomerCardId): Promise<CustomerCardResponse[]> {
		return this.customerCard.listAll({ customerId });
	}
}