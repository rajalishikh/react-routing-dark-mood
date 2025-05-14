import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import BlogDetails from './Componets/BlogDetails/BlogDetails.Jsx';
import Blog from './Componets/Blogs/Blog.jsx';
import BookMarks from './Componets/BookMarks/BookMarks.jsx';
import Home from './Componets/Home/Home.jsx';
import MainLayOut from './Componets/MainLayOut/MainLayOut.jsx';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayOut></MainLayOut> ,
    children:[
      {
        path:"/",
        element:<Home></Home>

      },
      
      {
        path:"/Blogs",
        element:<Blog></Blog>,
        loader:()=>fetch('https://dev.to/api/articles?per_page=20?top=7')
      },
      {
        path:`/blog/:id`,
        element:<BlogDetails></BlogDetails>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`)
       
      },
      {
        path:"/BookMarks",
        element:<BookMarks></BookMarks>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
 
   
    
    <RouterProvider router={router} />
  
)
