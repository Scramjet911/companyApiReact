import { useRef, useState } from 'react';

import './EmployeeForm.css';

import InputField from './InputFields';
import SelectFields from './SelectFields';
import FileInput from './FileInput';

const EmployeeForm = (props) => {
    const [submitButton, changeSubmitButton] = useState(true);

    const nameRef = useRef(null);
    const numberRef = useRef(null);
    const emailRef = useRef(null);
    const dateRef = useRef(null);
    const experienceRef = useRef(null);
    const addressRef = useRef(null);
    const roleRef = useRef(null);
    const statusRef = useRef(null);

    const onFieldsChange = (forceValue=true) => {
        console.log(nameRef.current.value);
        if (nameRef.current?.value &&
            numberRef.current?.value &&
            emailRef.current?.value &&
            dateRef.current?.value &&
            experienceRef.current?.value &&
            addressRef.current?.value &&
            forceValue
        ){
            changeSubmitButton('');
        }
        else{
            changeSubmitButton(true);
        }
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
                        inputRef={nameRef}
                        checkFields={onFieldsChange}
                    />
                    <InputField 
                        fieldName='Employee Number' 
                        fieldId='numberInput' 
                        fieldType='number' 
                        inputRef={numberRef}
                        checkFields={onFieldsChange}
                    />
                    <InputField 
                        fieldName='Employee Email' 
                        fieldId='emailInput' 
                        fieldType='email' 
                        inputRef={emailRef}
                        checkFields={onFieldsChange}
                    />
                    <InputField 
                        fieldName='Joining Date' 
                        fieldId='joiningInput' 
                        fieldType='date' 
                        inputRef={dateRef}
                        checkFields={onFieldsChange}
                    />
                    <SelectFields 
                        name='Role' 
                        options={['Trainee', 'Associate', 'Manager']} 
                        selectRef={roleRef}
                    />
                    <SelectFields 
                        name='Status' 
                        options={['Married', 'Single', 'Divorced']} 
                        selectRef={statusRef}
                    />
                    <InputField 
                        fieldName='Experience' 
                        fieldId='experienceInput' 
                        fieldType='text' 
                        inputRef={experienceRef}
                        checkFields={onFieldsChange}
                    />
                    <InputField 
                        fieldName='Address' 
                        fieldId='addressInput' 
                        fieldType='text' 
                        inputRef={addressRef}
                        checkFields={onFieldsChange}
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