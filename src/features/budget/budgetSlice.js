import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const budgetState = {
  updateState: false,
  loading: false,
  budgetList: [],
  error: "",
  response: "",
};

export const fetchBudget = createAsyncThunk(
  "budget/fetchBudget",
  async () => {
    const response = await axios.get("http://localhost:5000/api/v1/budget/");
    return response.data.allRecords;
  }
);
export const addRecord = createAsyncThunk(
    "budget/addRecord",
    async (data) => {
      const newRecord = await axios.post("http://localhost:5000/api/v1/budget/add-record", {
                amount:+data.amount,
                category:data.category,
                date:new Date(data.date),
                description:data.description,
      });
      return newRecord.data.newRecord;
    }
  );
  export const removeRecord = createAsyncThunk(
    "budget/removeRecord",
    async (data) => {
      const response = await axios.delete(
        `http://localhost:5000/api/v1/budget/delete-record/${data}`
      );
      return response.data.record;
    }
  );
  export const updateRecord = createAsyncThunk(
    "budget/updateRecord",
    async (data) => {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/budget/update-record/${data.key}`,
        {
            amount:+data.amount,
            category:data.category,
            date:new Date(data.date),
            description:data.description,
        }
      );
      return response.data.response;
    }
  );
const budgetSlice = createSlice({
    name: "budget",
    initialState: budgetState,
    reducers: {
      changeStateTrue: (state) => {
        state.updateState = true;
      },
      changeStateFalse: (state) => {
        state.updateState = false;
      },
      clearResponse: (state) => {
        state.response = "";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchBudget.fulfilled, (state, action) => {
          state.budgetList = action.payload;
        })
        .addCase(fetchBudget.rejected, (state, action) => {
          state.error = action.error.message;
        });
      builder
        .addCase(addRecord.pending, (state) => {
          state.loading = true;
        })
        .addCase(addRecord.fulfilled, (state, action) => {
          state.budgetList.push(action.payload);
          state.loading = false;
          state.response = "add";
        })
        .addCase(addRecord.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
      builder.addCase(removeRecord.fulfilled, (state, action) => {
        state.budgetList = state.budgetList.filter((record)=>record.key!==action.payload.key)
        state.response = "delete";
      });
      builder.addCase(updateRecord.fulfilled, (state, action) => {
        const updateItem = action.payload;
        console.log(updateItem);
        const index = state.employeeList.findIndex(
          (item) => item.key === updateItem.key
        );
        if (index!==-1) {
          state.budgetList[index] = updateItem;
        }
        state.response = "update";
      });
    },
  });

  export default budgetSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } =
  budgetSlice.actions;