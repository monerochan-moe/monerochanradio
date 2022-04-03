import './App.css';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import DarkModeToggle from "react-dark-mode-toggle";
import Countdown from 'react-countdown';

const GifPlayerContext = React.createContext()
const XMRSpinnerContext = React.createContext()
const ToggleContext = React.createContext()

const Completionist = () => <span>NearNymphs NFT mint on Near Protocol is live!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days} days {hours} hours until NearNypmhs NFT mint - brought to you by tan69dao</span>;
  }
};

function App() {
  const [gif, setGif] = useState('https://fileportal.org/GADSoto47u0R7CShyd9t8W-9yiJ4OZ7eBpzm3PJSU7bu0A')
  const [spin, setSpin] = useState(0)
  const [toggle, setToggle] = useState(() => false)
  
  function triggerAnim(toggle) {
    if (toggle === true) {
      setGif('https://fileportal.org/ZADbsFFA6aO-XT3cL5x6ksdIuQTnRsMDCCZrJAhv4z3Awg/')
    } else if (toggle === false) {
      setGif('https://fileportal.org/_AjpCgEvClHM1TNXrv3YWXLeQKgz7z-ZEdUdwHGTNwAE1A')
    }
    setSpin(1)
  }

  function pauseAnim(toggle) {
    if (toggle === true) {
      setGif("https://fileportal.org/ZAAEKMDxpOZYKh5r6rfepF0wJBHoRrk1BdfC8jtTFzUyCA/")
    } else if (toggle === false) {
      setGif('https://fileportal.org/GADSoto47u0R7CShyd9t8W-9yiJ4OZ7eBpzm3PJSU7bu0A')
    }
    setSpin(0)
  }

  return (
    <ToggleContext.Provider value={ toggle }>   
     <a href="https://b.link/tandao" style={{background:"#ff6600"}}>
          <span className="marquee" style={{color:"black"}}>
            <span>
              <Countdown date={'2022-04-06T03:12:00'} renderer={renderer}/>
            </span>
          </span>
      </a>
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
          <header className="App-header">
            <XMRSpinnerContext.Provider value={ spin }>
              <img className="XMR-logo" src={ toggle === false ? "https://fileportal.org/XAFxT3D33-9ui-N_rS696C7fXf0IoCW2xlZoljUgVU63ew" : "https://fileportal.org/CACAQXY48loSupnTB6Y4I6o2LmQuz5QtIlA5gHMNBG49JQ"} alt="logo" spin={spin} />
              <p className="r-title">Monerochan Radio</p>
              <a href="https://b.link/tandao">
                <img alt="tan69dao" className="tan69dao" src="https://fileportal.org/vABwJds8UyVoyy1daX1yBJLe0ITLFvG0DXtlPeGFIPyBYA" width="300"/>
              </a>
              <ReactAudioPlayer 
                  className="radio" 
                  src={ toggle === true ? "https://live.hunter.fm/lofi_high" :  "https://nrf1.newradio.it:9522/stream"}
                  controls 
                  onPlay={ () => triggerAnim(toggle) } 
                  onPause={ () => pauseAnim(toggle)}
                  />  
            <GifPlayerContext.Provider value={ gif }>
              <img className="Monerochan" src={ gif } alt="Monerochan"/>
          </GifPlayerContext.Provider>
            </XMRSpinnerContext.Provider>
              
          </header>
          <body>
          </body>
          <a href="https://github.com/monerochan-moe/monerochanradio">About</a>
        </div>
      </ToggleContext.Provider>
      
  );
}

export default App;
