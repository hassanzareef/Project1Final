import React, { ReactNode, useEffect, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UpdateForm } from '../../components/UpdateForm/UpdateForm';

export const EditProfile:React.FC = () => {

    const profile = useSelector((state:RootState) => state.user);

    const navigator = useNavigate();

    let firstTime = true;

    useEffect(()=> {
        if(!profile.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        }
        console.log("Current App State", profile);
        if(!profile.error && profile.user && !firstTime){
            navigator('/userProfile');
        }
        firstTime = false;
    },[profile]);

    return (
        <div>
            <Navbar />
            <UpdateForm />
        </div>
    )

}