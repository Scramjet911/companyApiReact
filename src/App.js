import Logo from './images/logo.png';
import './App.css';
import SideBar from './components/SideBar';
import EmployeeForm from './components/EmployeeForm';
// import { connect } from 'react-redux';
// import { setEmployeeList } from './actions';

// const mapStateToProps = (state) => {
//   return {
//     employeeList: state.Employees.employeeList
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   setEmployeeList: dispatch()
// }

function App() {
  return (
    <div className='App'>
      <div className='header-logo'>
          <img src={Logo} width='70px' alt='Company Logo'/>
      </div>
      <div className='main-container'>
        <SideBar />
        <EmployeeForm />
      </div>
    </div>
  );
}

export default App;
