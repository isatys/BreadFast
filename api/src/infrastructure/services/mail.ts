const nodemailer = require('nodemailer');
const IMailService = require('../../domain/services/mail');
import User from '../../domain/entities/user';

const htmlTemplateRegister = require('../../utils/mailTemplate/templateRegister');
const htmlTemplateForgotPassword = require('../../utils/mailTemplate/templateForgotPassword');
const htmlTemplateValidateUser = require('../../utils/mailTemplate/templateValidateUser');
const htmlTemplateUserToAdmin = require('../../utils/mailTemplate/templateUserToAdmin');
const htmlTemplateAdminToUser = require('../../utils/mailTemplate/templateAdminToUser');
const htmlTemplateRejectUser = require('../../utils/mailTemplate/templateRejectUser');
const htmlTemplateValidateEmail = require('../../utils/mailTemplate/auth/templateValidateEmail');

interface Info {
	messageId: string;
}

// async..await is not allowed in global scope, must use a wrapper
module.exports = class MailService extends IMailService {
	constructor() {
		super();

		// create reusable transporter object using the default SMTP transport

		this.transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			secure: true, // true for 465, false for other portsnpm ru
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASSWORD,
			},
			tls: {
				rejectUnauthorized: false,
			},
		});
	}

	async send(to: Array<User>, element: any, type: string) {
		let toText = '';
		let subject = '';
		let msg = '';
		to.forEach((user: User) => {
			toText += `${user.email} , `;
		});
		switch (type) {
			case 'register':
				msg = htmlTemplateRegister(element);
				subject = 'Nouvelle inscription';
				break;
			case 'forgot-password':
				msg = htmlTemplateForgotPassword(element);
				subject = 'Mot de passe oublié';
				break;
			case 'validate-user':
				msg = htmlTemplateValidateUser(element);
				subject = 'Utilisateur validé';
				break;
			case 'user-to-admin':
				msg = htmlTemplateUserToAdmin(element);
				subject = 'Ajout administrateur';
				break;
			case 'admin-to-user':
				msg = htmlTemplateAdminToUser(element);
				subject = 'Retrait administrateur';
				break;
			case 'reject-user':
				msg = htmlTemplateRejectUser(element);
				subject = 'Demande non approuvé';
				break;
			case 'validate-email':
				msg = htmlTemplateValidateEmail(element);
				subject = 'Validation de votre email';
				break;
			default:
				msg = '';
				subject = '';
				toText = '';
				break;
		}
		let info: Info;
		if (process.env.NODE_ENV === 'development') {
			let testAccount = await nodemailer.createTestAccount();
			let transporter = nodemailer.createTransport({
				host: 'smtp.ethereal.email',
				port: 587,
				secure: false, // true for 465, false for other ports
				auth: {
					user: testAccount.user, // generated ethereal user
					pass: testAccount.pass, // generated ethereal password
				},
			});
			info = await transporter.sendMail({
				from: '"Fred Foo 👻" <foo@example.com>', // sender address
				to: toText, // list of receivers
				subject, // Subject line
				html: msg,
			});
		} else {
			info = await this.transporter.sendMail({
				from: '"breadfast" <noreply@.com>', // sender address
				to: toText, // list of receivers
				subject, // Subject line
				html: msg, // plain text body // html body
			});
		}

		/* eslint-disable no-console */
		console.log('Message sent: %s', info.messageId);
		// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

		// Preview only available when sending through an Ethereal account
		console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		return info;
	}
};
