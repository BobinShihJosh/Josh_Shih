import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import { music } from "./assets";
/* Song: Tokyo Music Walker - Way Home
License: Creative Commons (CC BY 3.0) https://creativecommons.org/licenses/by/3.0
Music powered by BreakingCopyright: https://breakingcopyright.com */
const App = () => {

  function play() {
    let bgm = new Audio(music);
    bgm.volume = 0.2
    bgm.loop = true
    bgm.muted = false
    // Check if the play method is available (some browsers may require user interaction)
    if (typeof bgm.play === 'function') {
      // Play the audio when the user interacts with the document
      document.addEventListener('click', function() {
          bgm.play()
              .then(() => {
                  console.log('Audio playback started successfully');
              })
              .catch(error => {
                  console.error('Error starting audio playback:', error);
              });
      });
  }
  }


  play();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className=' relative bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero /><About />
          <StarsCanvas /> 
          <Tech />

          

        </div>
          
        <Experience />
        {/* <Tech /> */} 
        <Works /> 
         
        {/* <div className='relative z-0'>
         
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Works />
          <StarsCanvas />
        </div> */}
         
         {/* <Feedbacks /> */}
         <Contact></Contact>
        {/* <div className='relative z-0'> 
          <Contact />
          <StarsCanvas />
        </div> */}
      </div>
    </BrowserRouter>
  );
}

export default App;