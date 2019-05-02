import React, { Component } from 'react';
import ColorChannelGrid from './ColorChannelGrid'

class ColorChannels extends Component {
    render() {
        const arrayOfAverages = this.props.imageData
        // debugger
        return (
            <div>
                <ColorChannelGrid arrayOfAverages={arrayOfAverages} colorOfGrid='red,green,blue' />
                <ColorChannelGrid arrayOfAverages={arrayOfAverages} colorOfGrid='red' />
                <ColorChannelGrid arrayOfAverages={arrayOfAverages} colorOfGrid='green' />
                <ColorChannelGrid arrayOfAverages={arrayOfAverages} colorOfGrid='blue' />
            </div>
        );
    }
}

export default ColorChannels;
