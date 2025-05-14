import { Link } from "react-router-dom";
import img from "../../image/404 (1).jpg";
const Card = ({blog}) => {
    console.log(blog)
    const{cover_image,created_at,description,title,id}=blog
    return (
        
            <div className="transition hover:scale-105 border border-primary hover:border-pink-600 p-2 ">
			<Link to={`/blog/${id}`} rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || img } />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{created_at}</span>
					<p>{description}</p>
				</div>
			</Link>
			
		
            
        </div>
    );
};

export default Card;