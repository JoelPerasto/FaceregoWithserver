import React from 'react';
import './ImageLinkForm.css'


const ImageLinkForm = ({onInputChange, onPictureSubmit}) => {
    return(
        <div>
            <p className='center f2 fw4 w-third white'>
                {'I recognize faces from pictures'}
            </p>
            <div className='form w-40 center pa4 br3 shadow-5'>
                    <input className='url f4 pa2 w-70' type='text' onChange={onInputChange}></input>
                    <button className='btn w-30 grow f4 link ph3 pv2 dib black' onClick={onPictureSubmit}>Detect</button>
            </div>              
        </div>
    );
}

export default ImageLinkForm;