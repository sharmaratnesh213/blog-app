import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../constants';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axiosInstance.get("api/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img
                    src="https://drive.google.com/uc?export=download&id=1Yuk6vk3dtkGKFbyITiowil9Udd2PAoR4"
                    alt=""
                />
                <p>
                    I am Ratnesh Kumar, a B.Tech undergrad from NIT Agartala. I am a full-stack developer.
                    This app will let you share your ideas with the world. So, join our community to get started
                    with this journey. Do register with the app and login to meet people around you and the entire globe.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    {cats.map(c => (
                        <Link key={c._id} to={`/?cat=${c.name}`} className="link">
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    FOLLOW US
                </span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
