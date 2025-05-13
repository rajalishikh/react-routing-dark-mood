import { Link } from "react-router-dom";

const Card = ({blog}) => {
    console.log(blog)
    const{cover_image,created_at,description,title,id}=blog
    return (
        <div>
            <div>
			<Link rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image} />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
					<span className="text-xs dark:text-gray-600">{created_at}</span>
					<p>{description}</p>
				</div>
			</Link>
			
		</div>
            
        </div>
    );
};

export default Card;