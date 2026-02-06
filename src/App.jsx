import React from 'react'
import{Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';

//rafce ---> snippet to create react arrow function component export
//rfc ---> snippet to create normal react function component 
const App = () => { //every react component is going to return JSX aka html like syntax
                    //so app.jsx return jsx 
   
 
  
  
   return (
    <> <Navbar />
      <Hero title="Test Title" subtitle="Test Subtitle"/>
      <HomeCards />
      <JobListings />
       <ViewAllJobs />
       </>
    
  );
};

export default App;