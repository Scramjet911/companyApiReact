import React, { useState } from 'react';

import './EmployeeForm.css';

import InputField from './InputFields';
import SelectFields from './SelectFields';
import FileInput from './FileInput';

const EmployeeForm = (props) => {
    const [submitButton, changeSubmitButton] = useState(true);
    const [fieldCount, changeFieldCount] = useState(0);

    const validField = () => {
        changeFieldCount(fieldCount + 1);
        if(fieldCount >= 4){
            changeSubmitButton('');
        }
    }

    const invalidField = () => {
        changeFieldCount(fieldCount - 1);
        if(fieldCount < 4)
            changeSubmitButton(true);
    }

    return (
        <div className='form-container'>
            <div className='container form-title'>
                <h3>Create Employee</h3>
            </div>
            <form className='container employee-form'>
                <div className='fields-container'>
                    <InputField 
                        fieldName='Employee Name' 
                        fieldId='nameInput' 
                        fieldType='text' 
                        validField={validField} 
                        invalidField={invalidField}
                    />
                    <InputField 
                        fieldName='Employee Number' 
                        fieldId='numberInput' 
                        fieldType='text' 
                        validField={validField} 
                        invalidField={invalidField}
                    />
                    <InputField 
                        fieldName='Employee Email' 
                        fieldId='emailInput' 
                        fieldType='email' 
                        validField={validField} 
                        invalidField={invalidField}
                    />
                    <InputField 
                        fieldName='Joining Date' 
                        fieldId='joiningInput' 
                        fieldType='date' 
                        validField={validField} 
                        invalidField={invalidField}
                    />
                    <SelectFields 
                        name='Role' 
                        options={['Trainee', 'Associate', 'Manager']} 
                    />
                    <SelectFields 
                        name='Status' 
                        options={['Married', 'Single', 'Divorced']} 
                    />
                    <InputField 
                        fieldName='Experience' 
                        fieldId='experienceInput' 
                        fieldType='text' 
                        validField={validField} 
                        invalidField={invalidField}
                    />
                    <InputField 
                        fieldName='Address' 
                        fieldId='addressInput' 
                        fieldType='text' 
                        validField={validField} 
                        invalidField={invalidField}
                    />
                    <FileInput />
                </div>
                <div className='form-buttons'>
                    <button className='button create-button' disabled={submitButton}>Create</button>
                    <button className='button cancel-button'>Cancel</button>
                </div>
            </form>
        </div>
    )
};

export default EmployeeForm;