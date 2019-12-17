import React, {useState} from 'react';
import NextIcon from "../images/chevron-right.svg"
import billy from '../images/billy.png'
import ezra from '../images/ezra.jpg'
import gaga from '../images/gaga.jpg'
import lizzo from '../images/lizzo.jpg'


const ImageRender = ({setUserRect, setUserSelection, userSelection}) => {

    const [userMousePosition, setUserMousePosition] = useState({top: '100px', left: '100px'})
    
    const moveHandler = (event) => {
        const ratio = event.target.width / event.target.naturalWidth
        setUserRect({
            x: event.nativeEvent.offsetX / ratio - 75, 
            y: event.nativeEvent.offsetY / ratio - 75, 
            width: 150, 
            height: 150,
        })

        setUserMousePosition({
            top: event.nativeEvent.offsetY - (100*ratio / 2),
            left: event.nativeEvent.offsetX - (100*ratio / 2),
            width: 100 * ratio,
            height: 100 * ratio
        })
    }
    return(
        <div className="img-render">
            <img src={NextIcon} onClick={() => setUserSelection(lizzo)} className="next-icon left" alt="next arrow"></img>            
            <div className="img-wrapper">
                <img className="selected-img" src={userSelection} onMouseMove={moveHandler} alt="met gala" width='100%' ></img>
                <div className="mouse-rect" style={userMousePosition}></div>
            </div>
            <img src={NextIcon} onClick={() => setUserSelection(lizzo)} className="next-icon" alt="next arrow"></img>
        </div>
    )
}


export default ImageRender