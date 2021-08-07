import './InputFields.css';

const InputField = ({fieldName, fieldId, fieldType, inputRef, checkFields}) => {

    const validateInput = (e) => {
        switch(fieldId){
            case 'nameInput':
                if(e.target.value.match(/^[a-zA-Z ]{1,64}$/) === null){
                    inputRef.current.classList.add('red-box');
                    checkFields(false);
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    checkFields();
                }
                break;
            case 'numberInput':
                if(e.target.value.match(/^(\+91|0)[0-9]{0,16}$/) === null){
                    inputRef.current.classList.add('red-box');
                    checkFields(false);
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    checkFields();
                }
                break;
            case 'emailInput':
                if(e.target.value.match(/.+@keyvalue.systems$/) === null){
                    inputRef.current.classList.add('red-box');
                    checkFields(false);
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    checkFields();
                }
                break;
            case 'addressInput':
                if(e.target.value.length > 120){
                    inputRef.current.classList.add('red-box');
                    checkFields(false);
                }
                else{
                    inputRef.current.classList.remove('red-box');
                    checkFields();
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