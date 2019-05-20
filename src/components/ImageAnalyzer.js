import React, {useEffect} from 'react';
import useImage from 'use-image';



const ImageAnalyzer = ({userRect, setImageData, userSelection}) => {
    const [image] = useImage(userSelection);
    useEffect(() => {
        if(!image) return 
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext("2d");
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0);

        const arrayOfAverages = []

        // move through image
        for(let y=userRect.y; y<userRect.height + userRect.y; y+=10){
            for(let x=userRect.x; x<userRect.width + userRect.x; x+=10){
                const colorObject = getrgbAverages(ctx.getImageData(x, y, 10, 10))
                arrayOfAverages.push({
                    width: 10,
                    height: 10,
                    x: x - userRect.x,
                    y: y - userRect.y,
                    ...colorObject
                })
            }
        }
        
        setImageData(arrayOfAverages)
    }, [image, userRect])


    return ""
}

export default ImageAnalyzer


function getrgbAverages(imageData) {
    let colorObject = {red: 0, green: 0, blue: 0}

    imageData.data.reduce((accumulator, currentVal, index) => {
        if(index % 4 === 0){
            accumulator.red += currentVal
        } else if(index % 4 === 1){
            accumulator.green += currentVal
        } else if(index % 4 === 2){
            accumulator.blue += currentVal
        }
        return accumulator
    }, colorObject)

    colorObject.red = colorObject.red / (imageData.data.length / 4)
    colorObject.green = colorObject.green / (imageData.data.length / 4)
    colorObject.blue = colorObject.blue / (imageData.data.length / 4)

    return colorObject

}