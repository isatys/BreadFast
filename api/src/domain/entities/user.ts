export default interface User {
	id: number;
	lastname: string;
	firstname: string;
	email: string;
	phone: string;
	phone_secondary: string;
	company: string;
	company_logo: string;
	certification: string;
	certification_doc: string;
	password?: string;
	createdAt: string;
	role: string;
	status: string;
	deleted: boolean;
}
export interface UserRegsitration {
	email: string;
	lastname: string;
	firstname: string;
	password: string;
	repeat_password: string;
	phone: string;
	phone_secondary: string;
	company: string;
	company_logo: string;
	certification: string;
	certification_doc: string;
	type: Type;
}

export const Type: { [x: string]: 'animator' | 'conseil'} = {
	animator: 'animator',
	conseil: 'conseil'
}

export type Type = typeof Type[keyof typeof Type]
