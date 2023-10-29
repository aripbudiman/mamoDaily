import { createSlice } from "@reduxjs/toolkit";
import { pushNegaraToDatabase } from "../../feature/negara/create";
const negaraSlice= createSlice({
    name: "negara",
    initialState: {
        negara: [],
    },
    reducers: {
        addToDatabase: (state, action) => {
            pushNegaraToDatabase(action.payload);
        },
        readDatabase: (state, action) => {
            state.negara=action.payload;
        },
    },
});

export const { addToDatabase, readDatabase } = negaraSlice.actions;
export default negaraSlice.reducer;