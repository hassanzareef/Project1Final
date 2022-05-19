import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { getPending } from '../../slices/PendingSlice';
import { Reimbursements } from '../../components/Reimbursements/Reimbursements';
import { useState } from 'react';

//import './EmployeeHome.css';
import { BADHINTS } from 'dns';
export const CreatePage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const pending = useSelector((state:RootState) => state.pending);
    

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
        }
        console.log("Userstate: ", userInfo);
        console.log("Pending: ", pending);
    }, [userInfo, pending.pending]);

   
    return(
        <div>
            <Navbar />
            <div className="reimbursements-page">
                <h1>Your Pending Reimbursement Requests</h1>
                <h2> Pending </h2>
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                        </tr>
                        {pending.pending ? pending.pending.map((pen:IReimbursements) => { console.log("This is pending");console.log(pen);
                        return <tr className='table-row'><Reimbursements {...pen} key={pen.reimbursementId} /></tr>
                        }) :
                        <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}