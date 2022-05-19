import React, { ReactNode, useEffect, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Store';
import { useState } from 'react';
import { updateUserDetails } from '../../slices/UserSlice';

export const UpdateForm:React.FC = () => {

    const profile = useSelector((state:RootState) => state.user);

    const dispatch: AppDispatch = useDispatch();

    const [first, setFirst] = useState<string>("");
    const [last, setLast] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUpdate = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "first") {
            setFirst(event.target.value);
        }
        else if(event.target.name === "last") {
            setLast(event.target.value);
        } 
        else if(event.target.name === "username") {
            setUsername(event.target.value);
        } 
        else if(event.target.name === "email") {
            setEmail(event.target.value);
        } 
        else if(event.target.name === "password") {
            setPassword(event.target.value);
        } 
    }

    const submitProfile = (event:React.MouseEvent<HTMLButtonElement>) => {
        let userInfo = {
            first,
            last, 
            username,
            password,
            email
        }
        dispatch(updateUserDetails(userInfo));
    };

    return (
        <div>
            <form className="edit">
                {profile.error ? <h2>Screw You</h2> : <></>}
                <h4>First Name: </h4>
                <input autoComplete='off' required type="text" name="first" placeholder='First Name' onChange={handleUpdate}></input>
                <h4>Last Name: </h4>
                <input autoComplete='off' required type="text" name="last" placeholder='Last Name' onChange={handleUpdate}></input>
                <h4>Username: </h4>
                <input autoComplete='off' required type="text" name="username" placeholder='Usename' onChange={handleUpdate}></input>
                <h4>Password: </h4>
                <input autoComplete='off' required type="password" name="password" placeholder='Password' onChange={handleUpdate}></input>
                <h4>Email: </h4>
                <input autoComplete='off' required type="text" name="email" placeholder='Email' onChange={handleUpdate}></input>
            </form>
            <button className="submit-profile-btn" onClick={submitProfile}>Update</button>
        </div>
    )

}