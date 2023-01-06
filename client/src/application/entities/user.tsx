export default interface User {
	id?: number;
	lastname: string;
	firstname: string;
	email: string;
	phone: string;
	phone_secondary: string;
	company: string;
	company_logo: File;
	password?: string;
	repeat_password?: string;
	createdAt?: string;
	role?: string;
	status?: string;
	deleted?: boolean;
}

export interface Users {
	user: User;
}
