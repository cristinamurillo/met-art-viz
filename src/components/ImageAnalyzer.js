import React, {useEffect} from 'react';
import useImage from 'use-image';
import rainbow from '../images/rainbow.jpg'



const ImageAnalyzer = ({setImageData}) => {
    const [image] = useImage(rainbow);
    console.log(image)
    useEffect(() => {
        if(!image) return 
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext("2d");
        canvas.width = image.width
        canvas.height = image.height
        ctx.drawImage(image, 0, 0);

        const arrayOfAverages = []
        moveThroughImage(image, (x,y) => {
            const colorObject = getrgbAverages(ctx.getImageData(x, y, 50, 50))
            arrayOfAverages.push({
                width: 50,
                height: 50,
                x,
                y,
                ...colorObject
            })
        })
        setImageData(arrayOfAverages)
    }, [image])


    return ""
}

export default ImageAnalyzer




function moveThroughImage(image, callback) {
    for(let y=0; y<image.height; y+=50){
        for(let x=0; x<image.width; x+=50){
            callback(x,y)
        }
    }
}


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