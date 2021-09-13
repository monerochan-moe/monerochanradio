import './App.css';
import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import DarkModeToggle from "react-dark-mode-toggle";
import Matter from "matter-js";

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

  function setupVolleyBall(toggle) {
    if (toggle === false) {
      var canvas = document.getElementById('App');
      var Engine = Matter.Engine,
        Render = Matter.Render,
        World = Matter.World,
        Bodies = Matter.Bodies,
        Mouse = Matter.Mouse,
        MouseConstraint = Matter.MouseConstraint;
      
      var engine = Engine.create(canvas, {
          // positionIterations: 20
      });
      // var render = Render.create({
      //   element: canvas,
      //   engine: engine,
      //   options: {
      //     width: canvas.clientWidth,
      //     height: canvas.clientHeight,
      //     wireframes: false
      //   }
      // });
      
      var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
      World.add(engine.world, [ballA])
      // World.add(engine.world, [])

      // add mouse control
      var mouse = Mouse.create(canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

      World.add(engine.world, mouseConstraint);

      Matter.Runner.run(engine);

      // Render.run(render);

    }
    console.log(toggle)
  }

  return (
    <ToggleContext.Provider value={ toggle }>   
      <div id="App" className="App" beach={ toggle === false ? "1" : "0"} z-index="-1">
        <canvas id="canvas" className="canvas"/>
        <DarkModeToggle
                  onChange={() => setToggle(prevToggle => {
                      pauseAnim(!prevToggle)
                      setupVolleyBall(!prevToggle)
                    return prevToggle === true ? false : true
                  })}
                  checked={toggle}
                  size={130}
                  text-align="left"
                  z-index="100"
                  />   
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
