import { configureStore } from "@reduxjs/toolkit";
import  negaraReducer from "./slices/negaraSlices";

 const store = configureStore({
    reducer: {
        negara: negaraReducer,
    }
});


export default store;