const initialState = {
    EmployeeList: [],
    showEmployeeList: false,
}

const Employees = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':{
            const empList = [...state.EmployeeList, action.payload];
            return {...state, EmployeeList:empList};
        }
        case 'DELETE_EMPLOYEE':{
            const empList = state.EmployeeList.filter((_, index) =>
            index!==action.payload)
            return {...state, EmployeeList:empList}
        }
        case 'DISPLAY_EMPLOYEE_LIST':{
            return {...state, showEmployeeList:action.payload}
        }
        default:
            return state;
    }
}

export default Employees;