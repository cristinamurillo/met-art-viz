import React, { useState } from 'react';
import ColorChannels from './components/ColorChannels'
import ImageAnalyzer from './components/ImageAnalyzer'
import ImageRender from './components/ImageRender'
import ImageSelection, {defaultImg} from './components/ImageSelection';

const App = () => {
  const [imageData, setImageData] = useState([])
  const [userRect, setUserRect] = useState({x: 0, y: 0, width: 100, height: 100})
  const [userSelection, setUserSelection] = useState(defaultImg)
  return (
    <div className="App">
      {/* <div className="img-channels-container"> */}
        <ImageRender setUserRect={setUserRect} userSelection={userSelection}/>
        <ColorChannels imageData={imageData}/>
      {/* </div> */}
      <ImageAnalyzer userRect={userRect} setImageData={setImageData} userSelection={userSelection}/>
      <ImageSelection setUserSelection={setUserSelection}/>
    </div>
  );
}

export default App;
