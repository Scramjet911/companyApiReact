import { connect } from "react-redux"
import { deleteEmployee } from "../actions"
import DeleteIcon from '../images/delete.png';
import './EmployeeList.css';

const EmployeeList = (props) => {
    return (
        <div className='form-container'>
            <div className='container form-title'>
                <h3>Employee List</h3>
            </div>
            <div className='container list-container'>
                <table className='employee-table'>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Employee Name</th>
                            <th>Number</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Marital Status</th>
                            <th>Joining Date</th>
                            <th>Experience</th>
                            <th>Address</th>
                            <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.employeeList.map((el, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i+1}</td>
                                        <td>{el.name}</td>
                                        <td>{el.number}</td>
                                        <td>{el.email}</td>
                                        <td>{el.role}</td>
                                        <td>{el.status}</td>
                                        <td>{el.joiningDate}</td>
                                        <td>{el.experience}</td>
                                        <td>{el.address}</td>
                                        <td>
                                            <div className='icon-container' onClick={() => props.deleteEmployee(i)}>
                                                <img className='delete-icon' src={DeleteIcon} alt='delete icon'/>
                                            </div>
                                        </td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
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