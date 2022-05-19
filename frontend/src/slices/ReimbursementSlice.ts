import {createSlice, createAsyncThunk} from  "@reduxjs/toolkit";
import axios from "axios";
import { Reimbursements } from "../components/Reimbursements/Reimbursements";
import { IReimbursements } from "../interfaces/IReimbursements";

interface ReimbursementSliceState{
    loading: boolean,
    error: boolean,
    reimbursements?: IReimbursements[]
}

const initialReimbursementsState: ReimbursementSliceState = {
    loading: false,
    error: false
};

export const getReimbursements = createAsyncThunk(
  "reimbursements/get",
  async (id:number, thunkAPI) => {
      try{
          axios.defaults.withCredentials = true;
          const res = await axios.get(`http://localhost:8000/reimbursements/${id}`);
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

export const ReimbursementsSlice = createSlice({
    name: 'reimbursements',
    initialState: initialReimbursementsState,
    reducers: {
        clearPosts: (state) => {
            state.reimbursements = undefined
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getReimbursements.pending, (state, action)=> {
            state.loading = true;
        });

        builder.addCase(getReimbursements.fulfilled, (state, action) => {
            state.reimbursements = action.payload;
            state.loading = false;
            state.error = false;
        });

        builder.addCase(getReimbursements.rejected, (state, action) => {
            state.error = true;
            state.loading = false;
        });
        builder.addCase(createReimbursement.fulfilled, (state, action) => {
            if(state.reimbursements && action.payload){
                state.reimbursements = [action.payload, ...state.reimbursements];
            }
        });
    }
});

export const {clearPosts} = ReimbursementsSlice.actions;

export default ReimbursementsSlice.reducer;