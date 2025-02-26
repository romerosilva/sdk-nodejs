import { RestClient } from '@utils/restClient';
import type { CustomerCardResponse } from '../commonTypes';
import type { CustomerCardConfigUpdate } from './types';

export default function update({ customerId, cardId, body, config }: CustomerCardConfigUpdate): Promise<CustomerCardResponse> {
	return RestClient.fetch<CustomerCardResponse>(
		`/v1/customers/${customerId}/cards/${cardId}`,
		{
			headers: {
				'Authorization': `Bearer ${config.accessToken}`
			},
			body: JSON.stringify(body),
			method: 'PUT',
			...config.options
		}
	);
}
