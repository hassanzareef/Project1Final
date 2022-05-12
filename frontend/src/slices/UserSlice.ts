import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../interfaces/IUser";

//Figure out our default state for this slice

interface UserSliceState {
    loading: boolean,
    error: boolean,
    user?: IUser,
    currentProfile?: IUser
}

const initialUserState: UserSliceState = {
    loading: false,
    error: false
}

type Login = {
    username: string,
    password: string
}

export const loginUser = createAsyncThunk(
'user/login',
async (credentials: Login, thunkAPI) => {

    try{
            const res = await axios.post('http://localhost:8000/users/login', credentials);
            console.log(res.data);
            return{
                username : res.data.username,
                password : res.data.password,
                first: res.data.first,
                last: res.data.last,
                email: res.data.email,
                role : res.data.role

            }

    } catch(e){
        return thunkAPI.rejectWithValue('Something went wrong');
    }


}

)

export const UserSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        toggleError : (state) => {
            state.error = !state.error;
        }
    },
    extraReducers: (builder) => {
        //This is where we would create our reducer logic
    
    }
})

//If we had normal actions and reducers we would export them like this
export const {toggleError} = UserSlice.actions;