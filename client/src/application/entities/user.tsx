export default interface User {
	id: number;
	lastname: string;
	firstname: string;
	email: string;
	phone: string;
	password?: string;
	role: string;
	createdAt: string;
	isDeleted: boolean;
	isValidated: boolean;
}
export interface UserRegister {
	lastname: string;
	firstname: string;
	email: string;
	phone: string;
	password: string;
	repeatPassword: string;
}
export const Role: { [x: string]: 'ADMIN' | 'USER' } = {
	ADMIN: 'ADMIN',
	USER: 'USER',
};

export type Role = (typeof Role)[keyof typeof Role];
