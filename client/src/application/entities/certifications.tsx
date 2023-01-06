export interface Certification {
    certification: string,
    certification_doc: File,
    certification_date: string
}

export interface Certifications extends Array<Certification>{}

export default Certifications