import React, { useState } from 'react';
import './disc.css'
function Disc({num, onClick}: any) {

    
    return(
        <div 
        onClick={onClick}
            className='disc'
            style={
                {width : num * 50 }
            }
        >
            {num}
        </div>
    )
}

export default Disc;
