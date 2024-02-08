import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
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