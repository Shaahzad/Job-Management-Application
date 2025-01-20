import { createSlice } from "@reduxjs/toolkit";


export const GenerateUniqueId = () => Date.now() + Math.floor(Math.random() * 10000)

const initialState = {
    jobs: [
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
            "title": "Backend Developer",
            "position": 1
        },
        {
            "id": GenerateUniqueId(),
            "title": "PHP Developer",
            "position": 1
        },
        {
            "id": GenerateUniqueId(),
            "title": "Laravel Developer",
            "position": 1
        },
        {
            "id": GenerateUniqueId(),
            "title": "Mern Stack Developer",
            "position": 1
        },
        {
            "id": GenerateUniqueId(),
            "title": "React Developer",
            "position": 1
        },
        {
            "id": GenerateUniqueId(),
            "title": "Angular Developer",
            "position": 1
        },
    ],
}

const JobSlice = createSlice({
    name: 'Job',
    initialState,
    reducers: {
        addjob: (state, action) => {
            state.jobs = [...state.jobs, action.payload]
        }
    }
})


export const { addjob } = JobSlice.actions
export default JobSlice.reducer