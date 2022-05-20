import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { getPending } from '../../slices/PendingSlice';
import { getResolved } from '../../slices/ResolvedSlice';
import { Reimbursements } from '../../components/Reimbursements/Reimbursements';
import { useState } from 'react';
import '../../Table.css';
import './EmployeeHome.css';
export const EmployeeHome: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const pending = useSelector((state:RootState) => state.pending);
    const resolved = useSelector((state:RootState) => state.resolved); 

    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();
    useEffect(() => {
        //If the user is not logged in, push them to the login page
        if(!userInfo.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        }
        //If the user IS logged in, but we have not gotten their posts yet
        else{
            if(!pending.pending) {
                console.log("Loading in pending posts");
                dispatch(getPending());
            }

            if(!resolved.resolved) {
                console.log("Loading in resolved posts");
                dispatch(getResolved());
            }
            console.log("Userstate: ", userInfo);
            console.log("Pending: ", pending);
            console.log("Resolved: ", resolved);
    }}, [userInfo, pending.pending, resolved.resolved]);


    return(  
        <div>
            <Navbar />
            <div className="reimbursements-page">
                <h1>Your Reimbursement Requests</h1>
                <h2> Pending </h2>
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                            <th className='table-head'>Submitted Date</th>

                        </tr>
                        {pending.pending ? pending.pending.map((pen:IReimbursements) => {
                        return <tr className='table-row'><Reimbursements {...pen} key={pen.reimbursementId} /></tr>
                        }) :
                        <></>
                        }
                    </tbody>
                </table>
                <h2> Resolved </h2>
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                            <th className='table-head'>Submitted Date</th>
                            <th className='table-head'>Resolver ID</th>
                            <th className='table-head'>Resolved Date</th>
                        </tr>
                        {resolved.resolved ? resolved.resolved.map((res:IReimbursements) => {
                        return <tr className='table-row'><Reimbursements {...res} key={res.reimbursementId} /></tr>
                        }) :
                        <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    ) 
} 