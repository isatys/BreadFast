export default interface Bakery {
	id: number;
	name: string;
	address: string;
	city: string;
	country: string;
	logo: string;
	createdAt: string;
	isDeleted: boolean;
	userId: number;
}
export interface BakeryRegister {
	name: string;
	address: string;
	city: string;
	country: string;
	logo: string;
}
