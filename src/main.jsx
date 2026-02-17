import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';    
import 'bootstrap/dist/js/bootstrap.min.js';    
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import PGListingPage from './components/PGListingPage.jsx';
import HeroSection from './components/HeroSection.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import PGListDetails from './components/PGListDetails.jsx';
import Login from './components/auth/Login.jsx';
import SignUp from './components/auth/SignUp.jsx';

const router= createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[
    {
        index: true, //home page ke liye
        element: (
          <>
            <HeroSection />
            <PGListingPage />
          </>
        )
      },
      
    {
      path:'HeroSection',
      element:<HeroSection/>
    },
    {
        path: 'listings',
        element: <PGListingPage />
      },
    {
        path: 'About',
        element: <About/>
      },
      {
        path:'Contact',
        element:<Contact/>
      },
      {
        path:'listings/:id',
        element:<PGListDetails/>
      },
      {
        path:'login',
        element:<Login/>
      },
      {path:'signup',
      element:<SignUp/>
    }
  ]
}
], {
  basename: '/safe-home', // Set the base path for the router
})


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}/>
      
  </StrictMode>,
)
