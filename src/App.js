import React, { useState } from 'react';
import ColorChannels from './components/ColorChannels'
import ImageAnalyzer from './components/ImageAnalyzer'
import ImageRender, {defaultImg} from './components/ImageRender'

const App = () => {
  const [imageData, setImageData] = useState([])
  const [userRect, setUserRect] = useState({x: 0, y: 0, width: 100, height: 100})
  const [userSelection, setUserSelection] = useState(defaultImg)
  return (
    <div className="App">
        <ImageRender setUserRect={setUserRect} setUserSelection={setUserSelection} userSelection={userSelection}/>
        <ColorChannels imageData={imageData}/>
      <ImageAnalyzer userRect={userRect} setImageData={setImageData} userSelection={userSelection}/>
    </div>
  );
}

export default App;
