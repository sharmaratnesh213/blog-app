import React, { useContext, useState } from 'react'
import "./write.css"
import { Context } from "../../context/Context";
import { axiosInstance } from '../../constants';

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const [categories, setCategories] = useState("");
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {

        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc,
            categories,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axiosInstance.post("api/upload", data);
            } catch (err) {
                console.error("Error uploading the file:", err);
            }
        }

        try {
            const res = await axiosInstance.post("api/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) {
            console.error("Error creating the post:", err);
        }
    }
    return (
        <div className="write">
            {file && (
                <img
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt=""
                />
            )}

            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={e => setFile(e.target.files[0])}
                    />
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <div className="writeFormGroup">
                    <select
                        className="writeCat"
                        value={categories}
                        onChange={(e) => setCategories(e.target.value)}
                    >
                        <option value="">Select Category</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Music">Music</option>
                        <option value="Health">Health</option>
                        <option value="Education">Education</option>
                        {/* Add more categories as needed */}
                    </select>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="writeInput writeText"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <button className="writeSubmit" type="submit">Publish</button>
            </form>
        </div>
    )
}
