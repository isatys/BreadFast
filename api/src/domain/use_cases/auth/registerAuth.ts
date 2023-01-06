import { UserRegsitration } from '../../entities/user';

import { InvalidParamError, MissingParamError, TestError, GenericError } from '../../../utils/genericErrors';

const registerUser = (
	AuthRepository:any,
	BcryptService:any,
	UserRepository:any,
	FileService:any,
	MailService:any,
	multipartBodyService:any,
) => {
	async function execute(user:UserRegsitration, files:any) {
		if (
			user.firstname.length === 0 ||
			user.lastname.length === 0 ||
			user.email.length === 0 ||
			user.password.length === 0 ||
            user.phone.length === 0
		) {
			throw new MissingParamError(
				'Prénom ou Nom ou Email ou mot de passe manquant.'
			);
		}

		const emailTrim = user.email.toLowerCase().trim();
		const userExist = await UserRepository.getUser(emailTrim);

		if (userExist) {
			throw new InvalidParamError(
				'Un compte existe déjà avec cet email.'
			);
		}

		const passwordTrim = await BcryptService.hash(user.password);

		user.password = passwordTrim;
		user.firstname = user.firstname.toLowerCase().trim();
		user.lastname = user.lastname.toLowerCase().trim();

		const authUser = await AuthRepository.register(user);

		const fileService = new FileService();

		fileService.createDir(process.env.COMPANIES_PATH + authUser.id);

		if(files.company_logo) {
			fileService.moveFile(files.company_logo[0].originalname, 'temp', process.env.COMPANIES_PATH + authUser.id);
			const companyLogo = process.env.COMPANIES_PATH + authUser.id + '/' + files.company_logo[0].originalname;
			await AuthRepository.addCompanyLogo(companyLogo, authUser.id);
		}

		if (certifications) {
			const promises:any = [];

			certifications.forEach((certification:Certification, key:number) => {
				let nameCertification;
				if (files.certifications && files.certifications[key]) {
					nameCertification = process.env.COMPANIES_PATH + authUser.id + '/' + files.certifications[key].originalname;
					fileService.moveFile(files.certifications[key].originalname, 'temp', process.env.COMPANIES_PATH + authUser.id);
				}
				promises.push(
					CertificationRepository.addCertification(certification.certification, authUser.id, nameCertification ? nameCertification : null, certification.certification_date)
				);
			});

			Promise.all(promises);
		}

		const admins = await UserRepository.getAdmins();
		if (admins && admins.length > 0) {
			MailService.send([user], authUser, 'register');
		}

		return authUser;
	}

	return {
		execute,
	};
};

module.exports = {
	registerUser,
};
