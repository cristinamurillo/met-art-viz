import React, { useState } from 'react';
import ColorChannels from './components/ColorChannels'
import ImageAnalyzer from './components/ImageAnalyzer'

const App = () => {
  const [imageData, setImageData] = useState([])
  return (
    <div className="App">
      <ColorChannels imageData={imageData}/>
      <ImageAnalyzer setImageData={setImageData}/>
    </div>
  );
}

export default App;
