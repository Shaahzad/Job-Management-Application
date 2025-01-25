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
        {
            "id": GenerateUniqueId(),
            "title": "Angular Developer",
            "position": 1
        },
    ],
}

const jobReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_JOB":
            return {
                ...state,
                jobs: [...state.jobs, action.payload]
            };

        default:
            return state;
    }
};


export default jobReducer