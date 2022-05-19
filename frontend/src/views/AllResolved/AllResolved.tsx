import React, { useState, ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { Reimbursements } from '../../components/Reimbursements/Reimbursements';
import { getAllResolved } from '../../slices/ResolvedSlice';
import { MNavbar } from '../../components/Navbar/MNavbar';

//import './ManagerHome.css';
export const AllResolved: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const resolved = useSelector((state:RootState) => state.resolved);
    
    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        //If the user is not logged in, push them to the login page
        if(!userInfo.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        } else if (!resolved.resolved) {
            dispatch(getAllResolved())
        }
        console.log("Userstate: ", userInfo);
    }, [userInfo, resolved.resolved]);

    return(
        <>
            <MNavbar />
            <div className="manager-page">
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                        </tr>
                        {resolved.resolved ? resolved.resolved.map((reimbursements:IReimbursements) => {
                        return <tr className='table-row'><Reimbursements {...reimbursements} key={reimbursements.reimbursementId} /></tr>
                        }) :
                        <></>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}