import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { deleteBlogs, getBlogs } from '../Utility/Utility';

const BookMarks = () => {
    const [bookMarks,setBookMarks]=useState([])
    useEffect(()=>{
        const bringLocalStorageData=getBlogs()
        setBookMarks(bringLocalStorageData)
    },[])
    const HandleDeleteBlogs=(id)=>{
        deleteBlogs(id)
         const bringLocalStorageData=getBlogs()
        setBookMarks(bringLocalStorageData)


    }
    return (
       <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 mt-5">
            {
            bookMarks.map(blog=><Card blog={blog}  deletable={true} HandleDeleteBlogs={HandleDeleteBlogs}></Card>)
            

            }
            

        </div>
		
    );
};

export default BookMarks;