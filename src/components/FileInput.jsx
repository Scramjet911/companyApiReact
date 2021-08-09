import React, { useRef } from 'react';
import './FileInput.css';

const FileInput = (props) => {
    const fileInputRef = useRef(null);
    
    const openFileInput = (e) => {
        e.preventDefault();
        fileInputRef.current.click();
    }
    return (
        <div className='custom-file-container'>
            <div className='upload-label'>Upload Id Proof</div>
            <div id='idProof' className='custom-file'>
                <label className='file-input-label' htmlFor='file-input'>
                    Choose File
                    <button className='file-input-button' onClick={openFileInput}>Browse</button>
                </label>
                <input ref={fileInputRef} id='file-input' type='file' hidden />
            </div>
        </div>
    )
};

export default FileInput;