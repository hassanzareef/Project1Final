import {createSlice, createAsyncThunk} from  "@reduxjs/toolkit";
import axios from "axios";
import { Reimbursements } from "../components/Reimbursements/Reimbursements";
import { IReimbursements } from "../interfaces/IReimbursements";

interface PendingSliceState{
    loading: boolean,
    error: boolean,
    resolved?: IReimbursements[]
}

const initialReimbursementsState: PendingSliceState = {
    loading: false,
    error: false
};

export const getResolved = createAsyncThunk(
  "reimbursements/getr",
  async (thunkAPI) => {
      try{
          axios.defaults.withCredentials = true;
          const res = await axios.get(`http://localhost:8000/reimbursements/resolved`);
            console.log(res);
          return res.data;
      } catch (e){
          console.log(e);
      }
  }  
);


export const createReimbursement = createAsyncThunk(
    "reimbursements/create",
    async (newReimbursements:IReimbursements, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.post("http://localhost:8000/reimbursements/", newReimbursements);

            return newReimbursements;
        } catch (e){
            console.log(e);
        }
    }
)

export const getAllReimbursements = createAsyncThunk(
    "reimbursements/get",
    async (thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8000/reimbursements/allpending`);
              console.log(res);
            return res.data;
        } catch (e){
            console.log(e);
        }
    }  
  );

export const ResolvedSlice = createSlice({
    name: 'resolved',
    initialState: initialReimbursementsState,
    reducers: {
        clearPosts: (state) => {
            state.resolved = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getResolved.pending, (state, action)=> {
            state.loading = true;
        });

        builder.addCase(getResolved.fulfilled, (state, action) => {
            state.resolved = action.payload;
            state.loading = false;
            state.error = false;
        });

        builder.addCase(getResolved.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });

       
    }
});



export const {clearPosts} = ResolvedSlice.actions;

export default ResolvedSlice.reducer;
