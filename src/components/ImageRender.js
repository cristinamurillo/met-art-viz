import React, {useState} from 'react';
import NextIcon from "../images/chevron-right.svg"
import billy from '../images/billy.png'
import ezra from '../images/ezra.jpg'
import gaga from '../images/gaga.jpg'
import lizzo from '../images/lizzo.jpg'


const images = [billy,ezra,gaga,lizzo]

const ImageRender = ({setUserRect, setUserSelection, userSelection}) => {
    const [userMousePosition, setUserMousePosition] = useState({top: '100px', left: '100px'})
    
    const moveHandler = (event) => {
        const ratio = event.target.width / event.target.naturalWidth
        setUserRect({
            x: event.nativeEvent.offsetX / ratio - 50, 
            y: event.nativeEvent.offsetY / ratio - 50, 
            width: 150, 
            height: 150,
        })

        setUserMousePosition({
            top: event.nativeEvent.offsetY - (100*ratio / 2),
            left: event.nativeEvent.offsetX - (100*ratio / 2),
            width: 150 * ratio,
            height: 150 * ratio
        })
    }
    const newSelectionHandler = (event) => {
        let currentIndex = images.findIndex(image => image === userSelection)
        if (currentIndex < images.length - 1) {
            currentIndex += 1
        } else {
            currentIndex = 0
        }
        setUserSelection(images[currentIndex])
    }

    const previousSelectionHandler = (event) => {
        let currentIndex = images.findIndex(image => image === userSelection)
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = 0
        }
        setUserSelection(images[currentIndex])
        
    }

    return(
        <div className="img-render">
            <img src={NextIcon} onClick={previousSelectionHandler} className="next-icon left" alt="next arrow"></img>            
            <div className="img-wrapper">
                <img className="selected-img" src={userSelection} onMouseMove={moveHandler} alt="met gala" width='100%' ></img>
                <div className="mouse-rect" style={userMousePosition}></div>
            </div>
            <img src={NextIcon} onClick={newSelectionHandler} className="next-icon" alt="next arrow"></img>
        </div>
    )
}

export const defaultImg = () => {
    const randomIndex = Math.floor(Math.random() * (images.length+1))
    return images[randomIndex]
}

export default ImageRender