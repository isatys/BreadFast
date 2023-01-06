const AuthRepository = require('../database/prisma/repositories/auth');
const UserRepository = require('../database/prisma/repositories/user');
const CertificationRepository = require('../database/prisma/repositories/certification');

const BcryptService = require('../services/bcrypt');
const SessionService = require('../services/session');
const MulterService = require('../services/multer');
const MailService = require('../services/mail');

const buildDependencies = (env:any) => {
	const dependencies = {
		authRepository: new AuthRepository(),
		userRepository: new UserRepository(),
		certificationRepository: new CertificationRepository(),

		bcryptService: new BcryptService(),
		sessionService: new SessionService(),

		multipartBodyService: new MulterService(env.TEMP_DIR_PATH),

		mailService: new MailService(),
	};

	return dependencies;
};

module.exports = buildDependencies;
