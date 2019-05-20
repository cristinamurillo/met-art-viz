import React from 'react'
import billy from '../images/billy.png'
import ezra from '../images/ezra.jpg'
import gaga from '../images/gaga.jpg'
import lizzo from '../images/lizzo.jpg'

const imageSelection = ({setUserSelection}) => {
    const images = [billy, ezra, gaga, lizzo]

    return(
        <div className="selection-container">
        {images.map(image=> 
            <div onClick={() => setUserSelection(image)} className='image-option' style={{backgroundImage: `url(${image})`}}></div>
        )}
        </div>
    )
}

export const defaultImg = billy 

export default imageSelection