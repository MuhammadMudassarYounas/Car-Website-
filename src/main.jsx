import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import   Home  from '../src/Home.jsx'
import "./index.css"; 
import  ContactPage  from '../src/contact.jsx'

import "./index.css"

import { ClerkProvider } from '@clerk/clerk-react'
import {Profile} from './profile'
import AddListing from './add-listing/index.jsx'




const router= createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/contact",
    element:<ContactPage/>
  },
  {
    path:"/profile",
    element:<Profile/>
  },
  {
    path:"/add-listing",
    element:<AddListing/>
  }
])

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}/>
    </ClerkProvider>
  </StrictMode>,
)
