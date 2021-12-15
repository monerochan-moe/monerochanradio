import './App.css';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import DarkModeToggle from "react-dark-mode-toggle";

const GifPlayerContext = React.createContext()
const XMRSpinnerContext = React.createContext()
const ToggleContext = React.createContext()

function App() {
  const [gif, setGif] = useState('https://siasky.net/GADSoto47u0R7CShyd9t8W-9yiJ4OZ7eBpzm3PJSU7bu0A')
  const [spin, setSpin] = useState(0)
  const [toggle, setToggle] = useState(() => false)
  
  function triggerAnim(toggle) {
    if (toggle === true) {
      setGif('https://siasky.net/ZADbsFFA6aO-XT3cL5x6ksdIuQTnRsMDCCZrJAhv4z3Awg/')
    } else if (toggle === false) {
      setGif('https://siasky.net/_AjpCgEvClHM1TNXrv3YWXLeQKgz7z-ZEdUdwHGTNwAE1A')
    }
    setSpin(1)
  }

  function pauseAnim(toggle) {
    if (toggle === true) {
      setGif("https://siasky.net/ZAAEKMDxpOZYKh5r6rfepF0wJBHoRrk1BdfC8jtTFzUyCA/")
    } else if (toggle === false) {
      setGif('https://siasky.net/GADSoto47u0R7CShyd9t8W-9yiJ4OZ7eBpzm3PJSU7bu0A')
    }
    setSpin(0)
  }

  return (
    <ToggleContext.Provider value={ toggle }>   
      <div className="App" beach={ toggle === false ? "1" : "0"}>
        <DarkModeToggle
                  onChange={() => setToggle(prevToggle => {
                      pauseAnim(!prevToggle)
                    return prevToggle === true ? false : true
                  })}
                  checked={toggle}
                  size={130}
                  text-align="left"
                  /> 
          <a href="https://thetendiefren.co/"><img className="pepe" src="https://siasky.net/BAAjTZYF9KFBbs8eKJn7Kons1ArdcrWQ4WNlZc3EfSht_w" alt="Pepe" text-align="right"/> </a> 
          <header className="App-header">
            <XMRSpinnerContext.Provider value={ spin }>
              <img className="XMR-logo" src={ toggle === false ? "https://siasky.net/XAFxT3D33-9ui-N_rS696C7fXf0IoCW2xlZoljUgVU63ew" : "https://siasky.net/CACAQXY48loSupnTB6Y4I6o2LmQuz5QtIlA5gHMNBG49JQ"} alt="logo" spin={spin} />
              <p className="r-title">Monerochan Radio</p>
            <GifPlayerContext.Provider value={ gif }>
              <img className="Monerochan" src={ gif } alt="Monerochan"/>
          </GifPlayerContext.Provider>
            </XMRSpinnerContext.Provider>
              <ReactAudioPlayer 
                  className="radio" 
                  src={ toggle === true ? "https://live.hunter.fm/lofi_high" :  "https://nrf1.newradio.it:9522/stream"}
                  controls 
                  onPlay={ () => triggerAnim(toggle) } 
                  onPause={ () => pauseAnim(toggle)}
                  />  
          </header>
          <a href="https://github.com/monerochan-moe/monerochanradio">About</a>
        </div>
      </ToggleContext.Provider>
      
  );
}

export default App;
