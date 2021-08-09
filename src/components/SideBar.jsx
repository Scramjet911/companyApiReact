import React from 'react';
import { connect } from 'react-redux';
import { displayEmployeeList } from '../actions';
import './SideBar.css';

const SideBar = (props) => {
    return(
        <div className='sidebar'>
            <div className='sidebar-element' onClick={() => props.showEmployeeList(false)}>
                <div className='icon-container'>
                    <img className='icon' src='people.svg' alt='People'/>
                </div>
                    <p>
                        Add Employee
                    </p>
            </div>
            <div className='sidebar-element' onClick={() => props.showEmployeeList(true)}>
                <div className='icon-container'>
                    <img className='icon' src='people.svg' alt='People'/>
                </div>
                    <p>
                        Employee list
                    </p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        displayList: state.displayList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        showEmployeeList: (value) => {
            dispatch(displayEmployeeList(value));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);