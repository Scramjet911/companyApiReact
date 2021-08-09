import Logo from './images/logo.png';
import './App.css';
import SideBar from './components/SideBar';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
// import { connect } from 'react-redux';
// import { setEmployeeList } from './actions';

function App() {
  return (
    <div className='App'>
      <div className='header-logo'>
          <img src={Logo} width='70px' alt='Company Logo'/>
      </div>
      <div className='main-container'>
        <SideBar />
        <EmployeeForm />
        {/* <EmployeeList /> */}
      </div>
    </div>
  );
}

export default App;
