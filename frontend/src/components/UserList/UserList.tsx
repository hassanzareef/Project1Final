import React from 'react';
import { IUser } from '../../interfaces/IUser';

import '../Reimbursements/Reimbursements.css';
import '../../Table.css';

export const UserList:React.FC<IUser> = (users:IUser) => {

    return(
        <>
            <td className='table-cell'>{users.userId}</td>
            <td className='table-cell'>{users.username}</td>
            <td className='table-cell'>{users.first} {users.last}</td>
        </>
    )

}