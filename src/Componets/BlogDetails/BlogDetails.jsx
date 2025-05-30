import { useState } from "react";
import { BsBookmarksFill } from "react-icons/bs";
import Markdown from 'react-markdown';
import { Link, Outlet, useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import { saveBlogs } from "../Utility/Utility";

const BlogDetails = () => {
    const loaderData=useLoaderData()
    console.log(loaderData)
    const{cover_image,created_at,description,title,id,body_html}=loaderData
    const [tab,setTab]=useState(0) 
	const handleClick=(blog)=>{
		saveBlogs(blog)
	}
    return (
        <div>
            <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
	<article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
		<div className="space-y-6">
			<h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
			<div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
				<div className="flex items-center md:space-x-2">
					<img src={cover_image} alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-300" />
					<p className="text-sm">{description}</p>
				</div>
				<p className="flex-shrink-0 mt-3 text-sm md:mt-0">{created_at}</p>
			</div>
		</div>
		<div className="dark:text-gray-800">
			<p>Insert the actual text content here...</p>
		</div>
   </article>
{/* tab section dynamic start   */}
<div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800 ">
	<Link onClick={()=>setTab(0)} rel="noopener noreferrer" href="#" 
    className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
        ${tab ===0 ?"border border-b-0 ":"border-b"} dark:text-gray-600 dark:border-gray-600 `}>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
		</svg>

		<span>Content </span>
	</Link>
	<Link to={"author"} onClick={()=>setTab(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 
        ${tab ===1 ?"border border-b-0 ":"border-b"}dark:text-gray-600 dark:border-gray-600`} >
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
			<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
			<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
		</svg>

		<span>Author</span>
	</Link>
	<div onClick={()=>handleClick(loaderData)} className="bg-pink-500 bg-opacity-20 p-3 ml-3 rounded-full hover:bg-opacity-50  cursor-pointer hover:scale-110">
	<BsBookmarksFill size={20} className="text-secondary" />
	
	</div>


	
</div>
{/* Dynamic routes here it is  */}
	<Outlet></Outlet>

{/* tab section dynamic end    */}

	<div>
		<div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#MambaUI</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#TailwindCSS</a>
			<a rel="noopener noreferrer" href="#" className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#Angular</a>
		</div>
		<div className="space-y-2">
			<h4 className="text-lg font-semibold">Related posts</h4>
			<ul className="ml-4 space-y-1 list-disc">
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Nunc id magna mollis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Duis molestie, neque eget pretium lobortis</a>
				</li>
				<li>
					<a rel="noopener noreferrer" href="#" className="hover:underline">Mauris nec urna volutpat, aliquam lectus sit amet</a>
				</li>
			</ul>
		</div>
	</div>
	<Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>

	<h2></h2>
</div>

<div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-center flex-nowrap dark:bg-gray-100 dark:text-gray-800">
	

</div>



            
        </div>
    );
};

export default BlogDetails;