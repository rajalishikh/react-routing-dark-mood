import { createBrowserRouter } from 'react-router-dom';
import Author from '../Componets/Author/Author';
import BlogDetails from '../Componets/BlogDetails/BlogDetails.Jsx';
import Blog from '../Componets/Blogs/Blog';
import BookMarks from '../Componets/BookMarks/BookMarks';
import Content from '../Componets/Content/Content';
import Home from '../Componets/Home/Home';
import MainLayOut from '../Componets/MainLayOut/MainLayOut';

export  const router = createBrowserRouter([
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
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            index:true,
            element:<Content></Content>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path:"author",
            element:<Author></Author>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
            
          }
        ]
      },
      {
        path:"/BookMarks",
        element:<BookMarks></BookMarks>
      }
    ]
  },
]);

