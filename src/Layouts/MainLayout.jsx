import React from 'react'
import { Outlet } from 'react-router-dom' //Outlet is a component that is used to render the child routes, it is used in the layout component to render the child routes,
                                       // in this case we are using it to render the homepage component when the user navigates to the root route "/"
import Navbar from '../components/Navbar';
const MainLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default MainLayout