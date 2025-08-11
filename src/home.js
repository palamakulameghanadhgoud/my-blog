import { useEffect, useState } from "react";
import BlogList from "./Bloglist";  

const Home = () => { 
    const [blogs,setBlogs] = useState([ 
        {title:"HIT 1", body:"Body of Blog1", author:"vikram", id:1}, 
        {title:"HIT 2", body:"Body of Blog2", author:"krishna dev", id:2}, 
        {title:"HIT 3", body:"Body of Blog3", author:"Arjun sarkar", id:3} 
    ]); 
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }
    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    });

    return (  
        <div className="home"> 
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
        </div> 
    ); 
} 

export default Home;