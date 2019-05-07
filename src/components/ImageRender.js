import React from 'react';
import billy from '../images/billy.png'


const ImageRender = ({setUserRect}) => {
    
    const moveHandler = (event) => {
        setUserRect({x: event.nativeEvent.offsetX, y: event.nativeEvent.offsetY, width: 100, height: 100})
    }
    return <img src={billy} onMouseMove={moveHandler} alt="billy porter rocks the met gala" width="500" ></img>
}


export default ImageRender