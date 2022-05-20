import React, { ReactNode, useEffect, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import { RootState, AppDispatch } from '../../Store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UpdateForm } from '../../components/UpdateForm/UpdateForm';
import { MNavbar } from '../../components/Navbar/MNavbar';
import '../../Table.css';

export const EditProfile:React.FC = () => {

    const profile = useSelector((state:RootState) => state.user);

    const navigator = useNavigate();

    //let firstTime = true;

    useEffect(()=> {
        if(!profile.user){
            console.log("Navigating to login because not logged in");
            navigator("/login");
        }

    },[profile]);

    return (
        <div className="center">
            {profile.user?.role == 1? <Navbar /> : <MNavbar/> }
            <UpdateForm />
        </div>
    )

}