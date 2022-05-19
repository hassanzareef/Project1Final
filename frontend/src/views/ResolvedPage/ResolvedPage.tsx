import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { getResolved } from '../../slices/ResolvedSlice';
import { Reimbursements } from '../../components/Reimbursements/Reimbursements';
import { useState } from 'react';

//import './EmployeeHome.css';
import { BADHINTS } from 'dns';
export const ResolvedPage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const resolved = useSelector((state:RootState) => state.resolved); 

    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    

    useEffect(() => {
        if(!userInfo.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        }
        //If the user IS logged in, but we have not gotten their posts yet
        else{
            if(!resolved.resolved) {
                console.log("Loading in resolved posts");
                dispatch(getResolved());
            }
        }
        console.log("Resolved: ", resolved);
    }, [userInfo,resolved.resolved]);

    return(
        <div>
            <Navbar />
            <div className="reimbursements-page">
                <h1>Your Resolved Reimbursement Requests</h1>
        
                <h2> Resolved </h2>
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                        </tr>
                        {resolved.resolved ? resolved.resolved.map((res:IReimbursements) => {  console.log("This is resolved"); console.log(res);
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