import React, { useRef, useState } from 'react';
import './InputFields.css';

const InputField = ({fieldName, fieldId, fieldType, validField, invalidField}) => {
    const [fieldCounted, changeFieldCounted] = useState(false);
    const inputRef = useRef(null);

    const validateInput = (e) => {
        switch(fieldId){
            case 'nameInput':
                if(e.target.value.match(/^[a-zA-Z ]{1,64}$/) === null && !fieldCounted){
                    inputRef.current.classList.add('red-box');
                    invalidField();
                    changeFieldCounted(true);
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    validField();
                    changeFieldCounted(true);
                }
                break;
            case 'numberInput':
                if(e.target.value.match(/^(\+91|0)[0-9]{0,16}$/) === null && !fieldCounted){
                    inputRef.current.classList.add('red-box');
                    invalidField();
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    validField();
                }
                break;
            case 'emailInput':
                if(e.target.value.match(/@keyvalue.systems$/) === null && !fieldCounted){
                    inputRef.current.classList.add('red-box');
                    invalidField();
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    validField();
                }
                break;
            case 'addressInput':
                if(e.target.value.length > 120 && !fieldCounted){
                    inputRef.current.classList.add('red-box');
                    invalidField();
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    validField();
                }
                break;
            default :
        }
    }
    return (
        <div>
            <label htmlFor={fieldId}>{fieldName}</label>
            <input 
                ref={inputRef} 
                id={fieldId} 
                type={fieldType} 
                placeholder={fieldName}
                onInput={validateInput}
            />
        </div>
    )
};

export default InputField;