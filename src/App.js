import React, { useState } from 'react';
import ColorChannels from './components/ColorChannels'
import ImageAnalyzer from './components/ImageAnalyzer'
import ImageRender from './components/ImageRender'

const App = () => {
  const [imageData, setImageData] = useState([])
  const [userRect, setUserRect] = useState([{x: 0, y: 0, width: 100, height: 100}])

  return (
    <div className="App">
      <div className="img-channels-container">
        <ImageRender setUserRect={setUserRect}/>
        <ColorChannels imageData={imageData}/>
      </div>
      <ImageAnalyzer userRect={userRect} setImageData={setImageData}/>
    </div>
  );
}

export default App;
