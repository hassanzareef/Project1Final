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

type reimbursementInfo = {
    amount: number,
    description: string,
    type: number
}

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
    async (reimbursementInfo:reimbursementInfo, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.post("http://localhost:8000/reimbursements/create", reimbursementInfo);

            return {
                reimbursementId: res.data.reimbursementId,
                amount: res.data.amount,
                subDate: res.data.subDate,
                description: res.data.description,
                reimbursementAuthor: res.data.reimbursementAuthor,
                reimbursementStatus: res.data.reimbursementStatus,
                reimbursementType: res.data.reimbursementType
            }
        } catch (e){
            console.log(e);
        }
    }
)

export const getAllPending = createAsyncThunk(
    "reimbursements/allpending",
    async (thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8000/reimbursements/allpending`);
            console.log(res.data);
            return res.data;
            
        } catch (e){
            console.log(e);
        }
    }  
  );

  export const getReimbursementsById = createAsyncThunk(
    "reimbursements/getById",
    async (id: number, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.get(`http://localhost:8000/reimbursements/${id}`);
            return res.data;
        } catch (e){
            console.log(e);
        }
    }  
  );

  export const approveById = createAsyncThunk(
    "reimbursements/approve",
    async (id: number, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.put(`http://localhost:8000/reimbursements/approve/${id}`);
            return {};
        } catch (e){
            console.log(e);
        }
    }  
  );

  export const denyById = createAsyncThunk(
    "reimbursements/deny",
    async (id: number, thunkAPI) => {
        try{
            axios.defaults.withCredentials = true;
            const res = await axios.put(`http://localhost:8000/reimbursements/deny/${id}`);
            return {};
        } catch (e){
            console.log(e);
        }
    }  
  );

export const PendingSlice = createSlice({
    name: 'pending',
    initialState: initialReimbursementsState,
    reducers: {
        clearPending: (state) => {
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
        builder.addCase(createReimbursement.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(getReimbursementsById.pending, (state, action)=> {
            state.loading = true;
        });

        builder.addCase(getReimbursementsById.fulfilled, (state, action) => {
            state.pending = action.payload;
            state.loading = false;
            state.error = false;
        });

        builder.addCase(getReimbursementsById.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(getAllPending.pending, (state, action)=> {
            state.loading = true;
        });

        builder.addCase(getAllPending.fulfilled, (state, action) => {
            state.pending = action.payload;
            state.loading = false;
            state.error = false;
        });

        builder.addCase(getAllPending.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
    }
});



export const {clearPending} = PendingSlice.actions;

export default PendingSlice.reducer;
