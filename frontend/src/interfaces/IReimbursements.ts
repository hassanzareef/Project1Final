
export interface IReimbursements {

    reimbursementId: number,
    amount: number,
    subDate: Date,
    resDate?: Date,
    description: string,
    reimbursementAuthor: number,
    reimbursementResolver?: number,
    reimbursementStatus: number,
    reimbursementType: number

}