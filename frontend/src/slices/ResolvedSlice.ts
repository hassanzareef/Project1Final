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

export const getAllResolved = createAsyncThunk(
    "reimbursements/allresolved",
    async (thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8000/reimbursements/allresolved`);
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
        clearResolved: (state) => {
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
        builder.addCase(getAllResolved.pending, (state, action)=> {
            state.loading = true;
        });

        builder.addCase(getAllResolved.fulfilled, (state, action) => {
            state.resolved = action.payload;
            state.loading = false;
            state.error = false;
        });

        builder.addCase(getAllResolved.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
       
    }
});



export const {clearResolved} = ResolvedSlice.actions;

export default ResolvedSlice.reducer;
