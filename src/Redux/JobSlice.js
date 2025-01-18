import { createSlice } from "@reduxjs/toolkit";

const initialState = [
   {
        "id": 1,
        "title": "Software Engineer",
         "position": 2
        },
        {
        "id": 2,
        "title": "Frontend Developer",
        "position": 1
        }
]

const JobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: {
        addjob:(state,action)=>{
           
        }
    }

})


export const {addjob} = JobSlice.actions
export default JobSlice.reducer