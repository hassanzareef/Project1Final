import React, { useEffect } from 'react';
import { IReimbursements } from '../../interfaces/IReimbursements';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store';
import '../../Table.css';
import './Reimbursements.css';

export const Reimbursements:React.FC<IReimbursements> = (reimbursements:IReimbursements) => {

    const profile = useSelector((state:RootState) => state.user);

    function date() : string{
        let d = new Date(reimbursements.subDate);
       return d.toLocaleDateString();
    }
    function dateR() : string{
        if(reimbursements.resDate){
            let d = new Date(reimbursements.resDate);
            return d.toLocaleDateString();
        }
        return "";
        }
        
      

    return(
        <>
             {profile.user?.role == 2?  <td className='table-cell'>{reimbursements.reimbursementAuthor}</td> : <></> }
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
                        <p>Approved</p>
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
                <td className='table-cell'>{date()}</td>
                {reimbursements.reimbursementStatus != 1?   <td className='table-cell'>{reimbursements.reimbursementResolver}</td> : <></> }
                {reimbursements.reimbursementStatus != 1?   <td className='table-cell'>{dateR()}</td> : <></> }



        </>
    )

}