import './App.css';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const GifPlayerContext = React.createContext()
const XMRSpinnerContext = React.createContext()

function App() {
  const [gif, setGif] = useState('https://siasky.net/ZAAEKMDxpOZYKh5r6rfepF0wJBHoRrk1BdfC8jtTFzUyCA')
  const [spin, setSpin] = useState(0)
  
  function triggerAnim() {
    setGif('https://siasky.net/ZADbsFFA6aO-XT3cL5x6ksdIuQTnRsMDCCZrJAhv4z3Awg/')
    setSpin(1)
  }

  function pauseAnim() {
    setGif("https://siasky.net/ZAAEKMDxpOZYKh5r6rfepF0wJBHoRrk1BdfC8jtTFzUyCA/")
    setSpin(0)
  }

  return (
    <div className="App">
      <header className="App-header">
        <XMRSpinnerContext.Provider value={ spin }>
          <img className="XMR-logo" src="https://web.getmonero.org/press-kit/symbols/monero-symbol-480.png" alt="logo" spin={spin} />
        </XMRSpinnerContext.Provider>
        <p>Monerochan Radio</p>
        <GifPlayerContext.Provider value={ gif }>
          <img className="Monerochan" src={ gif } alt="Monerochan"/>
          <ReactAudioPlayer 
            className="lofi-audio" 
            src="https://live.hunter.fm/lofi_high" 
            controls 
            onPlay={ () => triggerAnim() } 
            onPause={ () => pauseAnim()}
            />
        </GifPlayerContext.Provider>
      </header>
      <a href="https://github.com/monerochan-moe/monerochanradio">About</a>
    </div>
  );
}

export default App;
