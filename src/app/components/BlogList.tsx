// app/components/BlogList.tsx
/*  import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await axios.get('http://localhost:5000/api/posts');
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id} className="border-b py-4">
                    <h2 className="text-2xl">{post.title}</h2>
                    <p>{post.content}</p>
                </li>
            ))}
        </ul>
    );
};

export default BlogList;
*/