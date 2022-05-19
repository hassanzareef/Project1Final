import {createSlice, createAsyncThunk} from  "@reduxjs/toolkit";
import axios from "axios";
import { Reimbursements } from "../components/Reimbursements/Reimbursements";
import { IReimbursements } from "../interfaces/IReimbursements";

interface PendingSliceState{
    loading: boolean,
    error: boolean,
    pending?: IReimbursements[]
}

const initialReimbursementsState: PendingSliceState = {
    loading: false,
    error: false
};

export const getPending = createAsyncThunk(
  "reimbursements/getp",
  async (thunkAPI) => {
      try{
          axios.defaults.withCredentials = true;
          const res = await axios.get(`http://localhost:8000/reimbursements/pending`);
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

export const PendingSlice = createSlice({
    name: 'pending',
    initialState: initialReimbursementsState,
    reducers: {
        clearPosts: (state) => {
            state.pending = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPending.pending, (state, action)=> {
            state.loading = true;
        });

        builder.addCase(getPending.fulfilled, (state, action) => {
            state.pending = action.payload;
            state.loading = false;
            state.error = false;
        });

        builder.addCase(getPending.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(createReimbursement.fulfilled, (state, action) => {
            if(state.pending && action.payload){
                state.pending = [action.payload, ...state.pending];
            }
        });

       
    }
});



export const {clearPosts} = PendingSlice.actions;

export default PendingSlice.reducer;
