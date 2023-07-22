import React from "react"
import "./header.css"
import Slider from '../../infinite-react-carousel'
export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Ratnesh Sharma</span>
                <span className="headerTitleLg">BlogFest</span>
            </div>
            <div className="headerCarousel">
                <Slider className="headerSlider" slidesToShow={1} arrowsScroll={1} autoplay={true} dots={true} pauseOnHover={false}>
                    <img className="headerImg"
                        src="https://wallpapers.com/images/hd/green-forest-linkedin-cover-myol9ujgq24wh5m9.jpg"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://wallpapers.com/images/hd/technology-linkedin-background-mjv7fb4mwtkupgw7.jpg"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://static.vecteezy.com/system/resources/previews/014/603/121/original/arctic-aurora-borealis-over-night-lake-in-sky-free-vector.jpg"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://cdn.shopify.com/s/files/1/0066/4574/3686/files/New_York_Skyline_LinkedIn_Background_Photo.png?v=1627912075"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://i0.wp.com/www.wallpapertip.com/wmimgs/64-643104_linkedin-cover-photo-healthcare.jpg"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://lmst.agri.ruh.ac.lk/moodle/pluginfile.php/124/course/overviewfiles/Fruit%20and%20vegetable%20banner.jpg"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://linkedinimagesdotcom.files.wordpress.com/2016/04/3377980157-eo3aekh-nv7-1400x425-mt-100.jpg"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://i.pinimg.com/736x/92/46/c6/9246c6c194cd50c8f81c78913c264092--amazing-cars-football.jpg"
                        alt=""
                    />
                    <img className="headerImg"
                        src="https://www.munichre.com/content/dam/munichre/global/images/royalty-free-mediaportal/mauritius_SH_06368039.jpg/_jcr_content/renditions/cropped.3_to_1.jpg./cropped.3_to_1.jpg"
                        alt=""
                    />
                </Slider>

                {/* <img
                    className="headerImg"
                    src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                    alt=""
                /> */}
            </div>
        </div>
    );
}
