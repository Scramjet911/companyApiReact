export const addEmployee = (employee) => ({
    type: 'ADD_EMPLOYEE',
    payload: employee
});

export const deleteEmployee = (position) => ({
    type: 'DELETE_EMPLOYEE',
    payload: position
});

export const displayEmployeeList = (value) => ({
    type: 'DISPLAY_EMPLOYEE_LIST',
    payload: value
});