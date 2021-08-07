const initialState = {
    employeeList: [],
}

export const Employees = (state=initialState, action={}) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            return [...state, action.payload];
        default:
            return state;
    }
}