import { connect } from "react-redux"
import { deleteEmployee } from "../actions"

const EmployeeList = () => {
    return (
        <div className='form-container'>
            <div className='container form-title'>
                <h3>Employee List</h3>
            </div>
            <div className='container employee-form fields-container'>
                <table>
                    <thead>
                        <td>S.No</td>
                        <td>Employee Name</td>
                        <td>Number</td>
                        <td>Email</td>
                        <td>Role</td>
                        <td>Marital Status</td>
                        <td>Joining Date</td>
                        <td>Experience</td>
                        <td>Address</td>
                        <td> </td>
                    </thead>
                    <tr>
                        <td>Employee 1</td>
                        <td>Employee 1</td>
                        <td>Emp</td>
                        <td>Emp</td>
                        <td>Emp</td>
                        <td>Emp</td>
                        <td>Emp</td>
                        <td>Emp</td>
                        <td>Emp</td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employeeList: state.EmployeeList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEmployee: (position) => {
            dispatch(deleteEmployee(position));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);