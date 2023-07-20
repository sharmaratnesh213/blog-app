import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import { axiosInstance } from '../../constants'

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            const options = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const res = await axiosInstance.get(`/posts` + search, options);
            setPosts(res.data);
        };
        fetchPosts();
    }, [search]);
    return (
        <>
            <Header />
            <div className='home'>
                <Posts posts={posts} />
                <Sidebar />
            </div>
        </>
    )
}
