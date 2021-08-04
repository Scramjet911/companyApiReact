import React from 'react';

const SelectFields = ({name, options}) => {
    return (
        <div className='select-wrapper'>
            <label htmlFor={name.toLowerCase()}>{name}</label>
            <select name={name.toLowerCase()} id={name.toLowerCase()} defaultValue='none'>
                <option value='none' disabled hidden>{name}</option>
                {
                    options.map((el, index) => {
                        return (
                            <option key={index} value={el.toLowerCase()}>{el}</option>
                        )
                    })
                }
            </select>
            <i className='arrow down' />
        </div>
    )
};

export default SelectFields;