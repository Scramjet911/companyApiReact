import React, { useRef, useState } from 'react';
import './FileInput.css';

const FileInput = (props) => {
    const [ fileName, setFileName ] = useState('Choose File');

    const fileInputRef = useRef(null);
    
    const openFileInput = () => {
        fileInputRef.current.click();
    }
    const handleChange = (e) => {
        setFileName(e.target.files[0].name);
    }

    return (
        <div className='custom-file-container'>
            <div className='upload-label'>Upload Id Proof</div>
            <div id='idProof' className='custom-file'>
                <label className='file-input-label' htmlFor='file-input'>
                    {fileName}
                    <button className='file-input-button' onClick={openFileInput}>Browse</button>
                </label>
                <input ref={fileInputRef} id='file-input' type='file' onChange={handleChange} hidden />
            </div>
        </div>
    )
};

export default FileInput;