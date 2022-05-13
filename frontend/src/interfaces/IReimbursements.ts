import {IUser} from './IUser';

export interface IReimbursements {

    reimbursementId: number,
    amount: number,
    subDate: Date,
    resDate?: Date,
    description: string,
    reimbursementAuthor: IUser,
    reimbursementResolver?: IUser,
    reimbursementStatus: number,
    reimbursementType: number

}