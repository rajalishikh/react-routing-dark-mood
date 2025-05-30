import { createRoot } from 'react-dom/client';
import {
  RouterProvider
} from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import './index.css';
import { router } from './MainRoutes/Routes';





createRoot(document.getElementById('root')).render(
 
   
    
    <div>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
    
  
)
