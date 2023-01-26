const AuthRepository = require('../database/prisma/repositories/auth');
const BakeryRepository = require('../database/prisma/repositories/bakery');
const UserRepository = require('../database/prisma/repositories/user');
const ValidateUserEmailRepository = require('../database/prisma/repositories/validateUserEmail');

const BcryptService = require('../services/bcrypt');
const UuidService = require('../services/uuid');
const SessionService = require('../services/session');
const MailService = require('../services/mail');

const buildDependencies = (env: any) => {
	const dependencies = {
		authRepository: new AuthRepository(),
		userRepository: new UserRepository(),
		bakeryRepository: new BakeryRepository(),
		validateUserEmailRepository: new ValidateUserEmailRepository(),

		bcryptService: new BcryptService(),
		uuidService: new UuidService(),
		sessionService: new SessionService(),

		mailService: new MailService(),
	};

	return dependencies;
};

module.exports = buildDependencies;
