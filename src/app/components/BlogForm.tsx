/*
import React, { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/api/posts', { title, content });
        setTitle('');
        setContent('');
        // Optionally refresh the blog posts here
    };

    return (
        <form onSubmit={handleSubmit} className="my-4">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-2 w-full mb-2"
                required
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="border p-2 w-full mb-2"
                required
            />
            <button type="submit" className="bg-blue-500 text-white p-2">Add Post</button>
        </form>
    );
};

export default BlogForm; */
