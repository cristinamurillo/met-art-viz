import React from 'react';


const ColorChannelSquare = ({data, colorOfGrid}) =>  {
    const colorsToInclude = colorOfGrid.split(',')
    const rgb = [0,0,0]
    if(colorsToInclude.includes('red')){
        rgb[0]=data.red
    }
    if(colorsToInclude.includes('green')){
        rgb[1] = data.green
    }
    if(colorsToInclude.includes('blue')){
        rgb[2] = data.blue
    }
    
    return <rect x={data.x} y={data.y} width={data.width} height={data.height} fill={`rgb(${rgb.join(',')})`}></rect>
}



const ColorChannelGrid = (props) => {
    const {arrayOfAverages, colorOfGrid} = props
    
    return (
        <svg  width="150" height="150">
            {arrayOfAverages.map((colorObj, index) => {
                return <ColorChannelSquare data={colorObj} key={index} colorOfGrid={colorOfGrid}/>
            })}
        </svg>
    );

}

export default ColorChannelGrid
