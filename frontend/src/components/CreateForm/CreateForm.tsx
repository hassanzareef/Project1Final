import React, { ReactNode, useEffect, useImperativeHandle } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../Store';
import { useState } from 'react';
import { createReimbursement, getPending } from '../../slices/PendingSlice';

import './CreateForm.css';
export const CreateForm:React.FC = () => {

    const profile = useSelector((state:RootState) => state.user);

    const dispatch: AppDispatch = useDispatch();

    const [amount, setAmount] = useState<number>(0);
    const [description, setDescription] = useState<string>("");
    const [type, setType] = useState<number>(1);
    const [genMessage, setGenMessage] = useState("");

    const handleCreate = (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === "amount") {
            setAmount(parseFloat(event.target.value));
        }
        else if(event.target.name === "description") {
            setDescription(event.target.value);
        } 
        else if(event.target.name === "type") {
            setType(parseFloat(event.target.value));
        } 
    }

    const submitRequest = (event:React.MouseEvent<HTMLButtonElement>) => {
        let reimbursementInfo = {
            amount,
            description,
            type
        }
        dispatch(createReimbursement(reimbursementInfo));
        console.log("Request Generated :D");
        setGenMessage("Request has been generated");
    };

    return (
        <div>
            <form className="edit">
                {profile.error ? <h2>Error Submitting</h2> : <></>}
                <h4>Amount: </h4>
                <input autoComplete='off' required type="number" name="amount" placeholder='Amount' onChange={handleCreate}></input>
                <h4>Description: </h4>
                <input autoComplete='off' required type="text" name="description" placeholder='Description' onChange={handleCreate}></input>
                <h4>Type: </h4>
                <input autoComplete='off' required type="number" name="type" placeholder='Type' onChange={handleCreate}></input>
            </form>
            <button className="submit-request-btn" onClick={submitRequest}>Submit</button>
            <h2>{genMessage}</h2>
        </div>
    )

}