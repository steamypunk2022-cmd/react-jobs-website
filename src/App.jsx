import React from 'react'
import{Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
import Homepage from './pages/Homepage';
import MainLayout from './Layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import { useState } from 'react';
import JobPage from './pages/JobPage';


//rafce ---> snippet to create react arrow function component export
//rfc ---> snippet to create normal react function component 
const App = () => { //every react component is going to return JSX aka html like syntax
                    //so app.jsx return jsx 
   
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<MainLayout />}>  {/* MainLayout is the layout component that will be rendered for all the routes, we can use it to render the navbar and other common components */}  
      <Route index element={<Homepage />} /> {/* index is the default route that will be rendered when the user navigates to the root route "/" */}
      <Route path="jobs" element={<JobsPage />} />  
      <Route path="jobs/:id" element={<JobPage />} />
      <Route path="*" element={<NotFoundPage />} /> {/* this route will be rendered when the user navigates to a route that does not exist, it is a catch all route */} 
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> this route will be rendered when the user navigates to a route that does not exist, it is a catch all route */}

     
    </>  
    )
  );

  
   return (
    <RouterProvider router={router} />
    
  );
};

export default App;