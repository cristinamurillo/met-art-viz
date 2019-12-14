import React, {useState} from 'react';


const ImageRender = ({setUserRect, userSelection}) => {

    const [userMousePosition, setUserMousePosition] = useState({top: '100px', left: '100px'})
    
    const moveHandler = (event) => {
        const ratio = event.target.width / event.target.naturalWidth
        setUserRect({
            x: event.nativeEvent.offsetX / ratio - 50, 
            y: event.nativeEvent.offsetY / ratio - 50, 
            width: 150, 
            height: 150
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
            <img className="selected-img" src={userSelection} onMouseMove={moveHandler} alt="met gala" width='100%' ></img>
            <div className="mouse-rect" style={userMousePosition}>
            </div>
        </div>
    )
}


export default ImageRender