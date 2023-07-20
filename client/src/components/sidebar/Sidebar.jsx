import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom';
import { axiosInstance } from '../../constants';

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const options = {
                headers: {
                    "Content-Type": "application/json"
                }
            };
            const res = await axiosInstance.get(`/categories`, options);
            setCats(res.data);
            console.log(cats);
        };
        getCats();
    }, [cats]);
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    ABOUT ME
                </span>
                <img
                    src="https://i.pinimg.com/736x/22/34/75/223475746873783616e2ec5c6e7badbc.jpg"
                    alt=""
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Neque, sint. Quas similique inventore aliquam
                    expedita magni optio ipsum fuga? Doloribus tempora

                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">
                    CATEGORIES
                </span>
                <ul className="sidebarList">
                    {cats?.length && cats.map(c => (
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
