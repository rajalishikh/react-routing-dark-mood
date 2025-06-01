import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../../image/404 (1).jpg";
const Card = ({blog,deletable,HandleDeleteBlogs}) => {
    console.log(blog)
    const{cover_image,created_at,description,title,id}=blog
    return (
        
            <div className="transition hover:scale-105 border border-primary hover:border-pink-600 p-2 relative ">
			<Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || img } />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{created_at}</span>
					<p>{description}</p>
				</div>
			</Link>
			{
				deletable && <div onClick={()=>HandleDeleteBlogs(id)} className="absolute top-0 right-0 p-2 bg-red-600 ml-2 mb-2 rounded-xl hover:scale-105 hover:bg-red-800">
                <MdDeleteSweep size={20} />
            </div>
			}
			
			
		
            
        </div>
    );
};

export default Card;