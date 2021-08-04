import Logo from './images/logo.png';
import './App.css';
import SideBar from './components/SideBar';
import EmployeeForm from './components/EmployeeForm';

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
