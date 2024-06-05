import { Client } from './Client';
import { ItemOrder } from './ItemOrder';

export type Order = {
	_id: string;
	number: number;
	date: string;
	status: string;
	client: Client;
	items: [ItemOrder];
}