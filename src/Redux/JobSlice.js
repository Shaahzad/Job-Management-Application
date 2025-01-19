import { createSlice } from "@reduxjs/toolkit";


const GenerateUniqueId = () => Date.now() + Math.floor(Math.random() * 10000)

const initialState = [
    {
        "id": GenerateUniqueId(),
        "title": "Software Engineer",
        "position": 2
    },
    {
        "id": GenerateUniqueId(),
        "title": "Frontend Developer",
        "position": 1
    },
    {
        "id": GenerateUniqueId(),
        "title": "Frontend Developer",
        "position": 1
    },
    {
        "id": GenerateUniqueId(),
        "title": "Frontend Developer",
        "position": 1
    },
    {
        "id": GenerateUniqueId(),
        "title": "Frontend Developer",
        "position": 1
    },
]

const JobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: {
        addjob: (state, action) => {

        }
    }

})


export const { addjob } = JobSlice.actions
export default JobSlice.reducer