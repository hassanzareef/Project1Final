import {IUser} from './IUser';

export interface IReimbursements {

    reimbursementId: number,
    amount: number,
    subDate: Date,
    resDate?: Date,
    description: string,
    reimbursementAuthor: string,
    reimbursementResolver?: number,
    reimbursementStatus: number,
    reimbursementType: number

}