import React from 'react';
import './SideBar.css';

const SideBar = (props) => {
    return(
        <div className='sidebar'>
            <div className='sidebar-element'>
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

export default SideBar;