import React, { useEffect } from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../Store';
import { useNavigate } from 'react-router-dom';
import { Login } from '../../components/LoginForm/LoginForm';

export const LoginPage: React.FC = () => {

    const userState = useSelector((state:RootState)=> state.user);

    const navigator = useNavigate();

    useEffect(()=> {

        // Post login and retrieving the user
        if(!userState.error && userState.user){
            console.log('User state changed');
            if(userState.user.role == 1) {
                // If they are an employee
                console.log("This person is a employee");
                navigator('/employeeHome');
            } else {
                // If they are a manager
                //navigator('/managerHome');
                console.log("This person is a manager");
            }
        }
    },[userState]);

    return(
        <div className= "login-page">
            <h1>In Login Page</h1>
            {userState.error ? <h2 className="login-error">Username or password incorrect</h2> : <></>}
            <Login/>;
        </div>
    )

}


