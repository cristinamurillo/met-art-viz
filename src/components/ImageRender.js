import React from 'react';
import billy from '../images/billy.png'


const ImageRender = ({setUserRect}) => {
    
    const moveHandler = (event) => {
        const ratio = event.target.width / event.target.naturalWidth
        setUserRect({
            x: event.nativeEvent.offsetX / ratio, 
            y: event.nativeEvent.offsetY / ratio, 
            width: 100, 
            height: 100
        })
    }
    return(
        <div className="img-render">
            <img src={billy} onMouseMove={moveHandler} alt="billy porter rocks the met gala" width='100%' ></img>
        </div>
    )
}


export default ImageRender