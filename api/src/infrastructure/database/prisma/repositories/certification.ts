import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

module.exports = class {
	addCertification(certification: string, userId:number, certificationDoc:string, certificationDate:Date) {
		return new Promise((resolve, reject) => {
			const newCertification = prisma.certification.create({
				data: {
					user_id: userId,
                    certification: certification,
                    certification_doc: certificationDoc,
					certification_date: new Date(certificationDate)
				},
			});

			resolve(newCertification);
		});
	}


};
