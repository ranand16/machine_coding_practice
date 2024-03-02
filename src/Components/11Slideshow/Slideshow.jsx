import React, { FC, useState } from "react";
import Slide from "./Slide";
import styles from './styles.css'

const Slideshow = ({ images }) => {
    const [active, setActive] = useState(0);
    return <div>
        <div className="imagecontainer">
            <div className="nav-btns nav-btns-prev" onClick={()=> active < 1 ? ()=>{} : setActive((i) => i-1)}>Previous</div>
            <div className="nav-btns nav-btns-next" onClick={()=> active >= images.length-1 ? ()=>{} : setActive((i) => i+1)}>Next</div>
            {
                images.map((imgobj, i)=><div onClick={()=>setActive(i)} key={imgobj["title"]} style={{ width: '100px', background: `url(${imgobj["image_url"]}) center center / contain no-repeat #aaa` }}></div>)
            }
        </div>
        <div className="slidercontainer">
            {
                images.map((imgobj, i)=><Slide key={imgobj["title"]} title={imgobj["title"]} image={imgobj["image_url"]} active={i === active} />)
            }
        </div>
    </div>;
};

export default Slideshow;
