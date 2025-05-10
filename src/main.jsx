import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from './Componets/Navbar/Navbar.jsx';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Navbar></Navbar> ,
  },
]);

createRoot(document.getElementById('root')).render(
 
   
    
    <RouterProvider router={router} />
  
)
