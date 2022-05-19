import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {IUser} from "../interfaces/IUser";

//Figure out our default state for this slice

interface UserSliceState {
    loading: boolean,
    error: boolean,
    user?: IUser,
    currentProfile?: IUser,
    allUsers?: IUser[]
}

const initialUserState: UserSliceState = {
    loading: false,
    error: false
}

type Login = {
    username: string,
    password: string
}

type userInfo = {
    first: string,
    last: string,
    username: string,
    password: string,
    email: string
}

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: Login, thunkAPI) => {

        try{
                axios.defaults.withCredentials = true;
                const res = await axios.post('http://localhost:8000/users/login', credentials);
                console.log(res.data);
                return{
                    userId : res.data.userId,
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

export const getUserDetails = createAsyncThunk(
    'users/get',
    async (id: number | string, thunkAPI) => {
        try{
            const res = await axios.get("http://localhost:8000/users/read");

            return {
                userId: res.data.userId,
                username: res.data.username,
                password: res.data.password,
                first: res.data.first,
                last: res.data.last,
                email: res.data.email,
                role: res.data.role
            }
        } catch(error){
            console.log(error);
        }
    }
);
/*
 * 
 */
export const updateUserDetails = createAsyncThunk(
    'users/post',
    async (userInfo: userInfo, thunkAPI) => {
        try{
            const res = await axios.post("http://localhost:8000/users/update", userInfo);
            return {
                userId: res.data.userId,
                username: res.data.username,
                password: res.data.password,
                first: res.data.first,
                last: res.data.last,
                email: res.data.email,
                role: res.data.role
            }
        } catch(error){
            console.log(error);
        }
    }
);

export const viewAllUsers = createAsyncThunk(
    'users/viewall',
    async (thunkAPI) => {
        try{
            const res = await axios.get("http://localhost:8000/users/viewall");
            return res.data;
        } catch(error){
            console.log(error);
        }
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async (thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = axios.get("http://localhost:8000/users/logout");
        } catch(e){
            console.log(e);
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
        builder.addCase(loginUser.pending, (state, action)=> {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            //The payload in this case, is the return from our asyncThunk from above
            state.user = action.payload;
            state.error = false;
            state.loading = false;
        });
        builder.addCase(loginUser.rejected, (state, action)=> {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(getUserDetails.pending, (state, action) => {
            state.loading = true;
        });
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.loading =false;
            state.currentProfile = action.payload;
        });
        builder.addCase(updateUserDetails.pending, (state, action)=> {
            state.loading = true;
        });
        builder.addCase(updateUserDetails.fulfilled, (state, action) => {
            //The payload in this case, is the return from our asyncThunk from above
            console.log(action.payload);
            state.user = action.payload;
            state.error = false;
            state.loading = false;
        });
        builder.addCase(updateUserDetails.rejected, (state, action)=> {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(logout.fulfilled, (state, action)=> {
            state.user = undefined;
        });
        builder.addCase(viewAllUsers.pending, (state, action)=> {
            state.loading = true;
        });

        builder.addCase(viewAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload;
            state.loading = false;
            state.error = false;
        });

        builder.addCase(viewAllUsers.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
    }
})

//If we had normal actions and reducers we would export them like this
export const {toggleError} = UserSlice.actions;

export default UserSlice.reducer;