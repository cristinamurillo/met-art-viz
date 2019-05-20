import React, {useState} from 'react';
import billy from '../images/billy.png'


const ImageRender = ({setUserRect, userSelection}) => {

    const [userMousePosition, setUserMousePosition] = useState({top: '100px', left: '100px'})
    
    const moveHandler = (event) => {
        const ratio = event.target.width / event.target.naturalWidth
        setUserRect({
            x: event.nativeEvent.offsetX / ratio - 50, 
            y: event.nativeEvent.offsetY / ratio - 50, 
            width: 100, 
            height: 100
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
            <img src={userSelection} onMouseMove={moveHandler} alt="met gala" width='100%' ></img>
            {/* <svg width="500" height="500" style={{position: 'absolute', top: 0, left: 0}}>
                <rect x="100" y="100" width="100" height="100" style={{strokeWidth:3, stroke:'rgb(0,0,0)'}}/>
            </svg> */}
            <div className="mouse-rect" style={userMousePosition}>
            </div>
        </div>
    )
}


export default ImageRender