import React from 'react';
import { IReimbursements } from '../../interfaces/IReimbursements';

import './Reimbursements.css';

export const Reimbursements:React.FC<IReimbursements> = (reimbursements:IReimbursements) => {

    return(
        <>
            <td className='table-cell'>{reimbursements.amount}</td>
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
        </>
    )

/*

<h3 className="reimbusements-user">Amount: {reimbursements.amount}</h3>
                <h3 className="reimbusements-user">Description: {reimbursements.description}</h3>
                {
                    (reimbursements.reimbursementStatus == 1) ?
                        <h3>Status: Pending</h3>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementStatus == 2) ?
                        <h3>Status: Resolved</h3>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementStatus == 3) ?
                        <h3>Status: Denied</h3>
                    :
                    <></>
                } 

                {
                    (reimbursements.reimbursementType == 1) ?
                        <h3>Type: Lodging</h3>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementType == 2) ?
                        <h3>Type: Travel</h3>
                    :
                    <></>
                } 
                {
                    (reimbursements.reimbursementType == 3) ?
                        <h3>Type: Food</h3>
                    :
                    <></>
                }
                {
                    (reimbursements.reimbursementType == 4) ?
                        <h3>Type: Other</h3>
                    :
                    <></>
                }
                <br></br><br></br>

                */

}