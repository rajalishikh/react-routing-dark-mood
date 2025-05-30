import { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { getBlogs } from '../Utility/Utility';

const BookMarks = () => {
    const [bookMarks,setBookMarks]=useState([])
    useEffect(()=>{
        const bringLocalStorageData=getBlogs()
        setBookMarks(bringLocalStorageData)
    },[])
    return (
       <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 mt-5">
            {
            bookMarks.map(blog=><Card blog={blog}></Card>)
            }

        </div>
		
    );
};

export default BookMarks;