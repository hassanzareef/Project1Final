import React, { useState, ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import {IReimbursements} from '../../interfaces/IReimbursements';
import { getReimbursementsById } from '../../slices/PendingSlice';
import { Reimbursements } from '../../components/Reimbursements/Reimbursements';
import { UserProfile } from '../UserProfile/UserProfile';

//import './ManagerHome.css';
import '../../Table.css';
export const ManagerHome: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);
    const pending = useSelector((state:RootState) => state.pending);
    
    const [employeeId, setEmployeeId] = useState<number>(0);

    const navigator = useNavigate();
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
        //If the user is not logged in, push them to the login page
        if(!userInfo.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        }
        console.log("Userstate: ", userInfo);
    }, [userInfo]);

    const handleId = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmployeeId(parseInt(event.target.value));
    }

    const searchRequest = (event:React.MouseEvent<HTMLButtonElement>) => {
        dispatch(getReimbursementsById(employeeId));
    };

    return(
        <>
            <UserProfile />
            <div className="manager2-page">
                <h1>Enter Employee ID</h1>
                <input autoComplete='off' required type="number" name="employeeId" placeholder='Employee ID' onChange={handleId}></input>
                <button className="submit-search-btn" onClick={searchRequest}>Search</button>
                <table className='table-class'>
                    <tbody>
                        <tr className='table-row-head'>
                        <th className='table-head'>Author ID</th>
                            <th className='table-head'>Amount</th>
                            <th className='table-head'>Description</th>
                            <th className='table-head'>Status</th>
                            <th className='table-head'>Type</th>
                            <th className='table-head'>Submitted Date</th>
                            <th className='table-head'>Resolver ID</th>
                            <th className='table-head'>Resolved Date</th>

                        </tr>
                        {pending.pending ? pending.pending.map((reimbursements:IReimbursements) => {
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