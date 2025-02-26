import type { Identification } from '../commonTypes';

export declare type CustomerCardResponse = {
  id: string;
  customer_id: string;
  expiration_month: number;
  expiration_year: number;
  first_six_digits: string;
  last_four_digits: string;
  payment_method: CustomerCardPaymentMethod;
  security_code: CustomerCardSecurityCode;
  issuer: CustomerCardIssuer;
  cardholder: CustomerCardCardholder;
  date_created: string;
  date_last_updated: string;
  user_id: string;
  live_mode: boolean;
};

export declare type CustomerCardPaymentMethod = {
	id: string;
	name: string;
	payment_type_id: string;
	thumbnail: string;
	secure_thumbnail: string;
}

export declare type CustomerCardSecurityCode = {
	length: number;
	card_location: string;
}

export declare type CustomerCardIssuer = {
	id: string;
	name: string;
}

export declare type CustomerCardCardholder = {
	name: string;
	identification: Identification;
}
