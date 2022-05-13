import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { getReimbursements } from '../../slices/ReimbursementSlice';
import { Reimbursements } from '../../components/Reimbursements/Reimbursements';

import './EmployeeHome.css';
export const EmployeeHome: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const reimbursements = useSelector((state:RootState) => state.reimbursement);

    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        //If the user is not logged in, push them to the login page
        if(!userInfo.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        }
        //If the user IS logged in, but we have not gotten their posts yet
        else if(userInfo.user && !reimbursements.reimbursements){
            console.log("No reimbursements Line: 26");
            dispatch(getReimbursements(userInfo.user.userId));
        }

        console.log("Userstate: ", userInfo, "Reimbursements: ", reimbursements);
    }, [userInfo, reimbursements.reimbursements]);

    return(
        <div>
            <Navbar />
            <div className="reimbursements-page">
                <h1>Your Reimbursement Requests</h1>
                <table className='table-class'>
                    <tr className='table-row-head'>
                        <th className='table-head'>Amount</th>
                        <th className='table-head'>Description</th>
                        <th className='table-head'>Status</th>
                        <th className='table-head'>Type</th>
                    </tr>
                    {reimbursements.reimbursements ? reimbursements.reimbursements.map((reimbursements:IReimbursements) => {
                    return <tr className='table-row'><Reimbursements {...reimbursements} key={reimbursements.reimbursementId} /></tr>
                    }) :
                    <></>
                    }
                </table>
                
            </div>
        </div>
    )

}