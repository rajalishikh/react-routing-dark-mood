import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const[theme,setTheme]=useState("light")
    const themeChange=(e)=>{
        if(e.target.checked){
            setTheme("synthwave")
            
        }else{
            setTheme("light")
        }
       
    }
    console.log(theme)
    useEffect(()=>{
        localStorage.setItem('theme',theme)
        const findTheme=localStorage.getItem("theme")
        document.querySelector("html").setAttribute("data-theme",findTheme)
    },[theme])
    return (
        
           <div>
             <div className="navbar bg-base-100  shadow-xl">
              
              <div className="flex-1">
                <a className="btn btn-ghost normal-case text-2xl gap-0 text-pink-500  font-bold">Byte<span className='text-blue-600'>Blaze</span></a>
              </div>
              <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                  
                    <li>
                    <NavLink to={"/"} className={({isActive})=>isActive?"text-primary font-bold ":"text-bold"}>Home</NavLink>
                    </li>
                  <li>
                  <NavLink  className={({isActive})=>isActive?"font-bold text-primary ":"text-bold"} to={"/Blogs"}>Blogs</NavLink>
                  </li>
                  <li>
                  <NavLink  className={({isActive})=>isActive?"font-bold text-primary ":"text-bold"} to={"/BookMarks"}>BookMarks</NavLink>
                  </li>
                  
                  <li>
                    <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <path
                  d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input onClick={themeChange} type="checkbox" value="synthwave" className="toggle theme-controller" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label></li>
                </ul>
              </div>
                          </div>
                         
           </div>
            
        
    );
};

export default Navbar;