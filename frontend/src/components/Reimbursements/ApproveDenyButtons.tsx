import React from 'react';
import { IReimbursements } from '../../interfaces/IReimbursements';
import { AppDispatch } from '../../Store';
import { useDispatch } from 'react-redux';
import { denyById, approveById, clearPending, getAllPending } from '../../slices/PendingSlice';

import './Reimbursements.css';
export const ApproveDenyButtons:React.FC<IReimbursements> = (reimbursements:IReimbursements) => {

    const dispatch: AppDispatch = useDispatch();

    const approveRequest = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log("Approving request");
        dispatch(approveById(reimbursements.reimbursementId));
        dispatch(clearPending());
        dispatch(getAllPending());
    };

    const denyRequests = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log("Approving request");
        dispatch(denyById(reimbursements.reimbursementId));
        dispatch(clearPending());
        dispatch(getAllPending());
    };

    return(
        <>
            <td className='table-cell'>${reimbursements.amount}</td>
            <td className='table-cell'>{reimbursements.description}</td>
            <td className='table-cell'>{
                    (reimbursements.reimbursementStatus == 1) ?
                        <p>Pending</p>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementStatus == 2) ?
                        <p>Resolved</p>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementStatus == 3) ?
                        <p>Denied</p>
                    :
                    <></>
                } </td>
            <td className='table-cell'>{
                    (reimbursements.reimbursementType == 1) ?
                        <p>Lodging</p>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementType == 2) ?
                        <p>Travel</p>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementType == 3) ?
                        <p>Food</p>
                    :
                    <></>
                }
                {
                    (reimbursements.reimbursementType == 4) ?
                        <p>Other</p>
                    :
                    <></>
                }</td>
                <td>
                    <button className="approve-btn" onClick={approveRequest}>Approve</button>
                    <button className="deny-btn" onClick={denyRequests}>Deny</button>
                </td>
        </>
    )

}