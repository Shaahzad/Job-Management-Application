import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./JobReducer";



const store = configureStore({
    reducer: {
        job: jobReducer
    }
})


export default store