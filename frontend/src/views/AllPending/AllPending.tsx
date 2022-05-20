import React, { useState, ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { getAllPending } from '../../slices/PendingSlice';
import { ApproveDenyButtons } from '../../components/Reimbursements/ApproveDenyButtons';
import { MNavbar } from '../../components/Navbar/MNavbar';
import '../../Table.css';
//import './ManagerHome.css';
export const AllPending: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const pending = useSelector((state:RootState) => state.pending);
    
    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        //If the user is not logged in, push them to the login page
        if(!userInfo.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        } else if (!pending.pending) {
            dispatch(getAllPending())
        }
        console.log("Pending:" , pending.pending);
        console.log("Userstate: ", userInfo);
    }, [userInfo, pending.pending]);

    return(
        <>
            <MNavbar />
            <div className="manager-page">
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>Author ID</th>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                            <th className='table-head'>Submitted Date</th>
                            <th className='table-head'>Approve / Deny</th>
                        </tr>
                        {pending.pending ? pending.pending.map((reimbursements:IReimbursements) => {
                        return <tr className='table-row'><ApproveDenyButtons {...reimbursements} key={reimbursements.reimbursementId} /></tr>
                        }) :
                        <></>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}