import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { getAllReimbursements } from '../../slices/PendingSlice';
import { Reimbursements } from '../../components/Reimbursements/Reimbursements';

//import './ManagerHome.css';
export const ManagerHome: React.FC = () => {

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
        //If the user IS logged in, but we have not gotten all  posts yet
        else if(userInfo.user && !pending.pending){
            console.log("No reimbursements Line: 26");
            dispatch(getAllReimbursements());
        }

        console.log("Userstate: ", userInfo, "Reimbursements: ", pending);
    }, [userInfo, pending.pending]);

    return(
        <div>
            <Navbar />
            <div className="reimbursements-page">
                <h1>Your Reimbursement Requests</h1>
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                        </tr>
                        {pending.pending ? pending.pending.map((reimbursements:IReimbursements) => {
                        return <tr className='table-row'><Reimbursements {...reimbursements} key={reimbursements.reimbursementId} /></tr>
                        }) :
                        <></>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )

}