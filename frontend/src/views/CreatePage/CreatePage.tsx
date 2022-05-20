import React, { ReactNode, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { CreateForm } from '../../components/CreateForm/CreateForm';
import { useState } from 'react';
import '../../Table.css';

//import './EmployeeHome.css';
export const CreatePage: React.FC = () => {

    const userInfo = useSelector((state:RootState) => state.user);

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
            
        }
        console.log("Userstate: ", userInfo);
    }, [userInfo]);

   
    return(
        <div className="center">
            <Navbar />
            <CreateForm />
        </div>
    )
}