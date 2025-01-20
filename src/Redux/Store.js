import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./JobSlice";



const store = configureStore({
    reducer: {
        job: jobReducer
    }
})


export default store