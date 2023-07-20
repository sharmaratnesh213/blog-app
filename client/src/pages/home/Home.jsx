import React from 'react'
import "./home.css"
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from 'react-router-dom'
import { BASE_URL } from '../../constants'

export default function Home() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
            await axios.get(`${BASE_URL}/posts` + search)
                .then((res) => {
                    console.log(res);
                    setPosts(res.data);
                }).catch((err) => {
                    console.log(err)
                    alert("Something went wrong!");
                });

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
