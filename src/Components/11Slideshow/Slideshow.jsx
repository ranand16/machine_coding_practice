import React, { FC, useState } from "react";
import Slide from "./Slide";
import styles from './styles.css'

const Slideshow = ({ images }) => {
    const [active, setActive] = useState(0);
    return <div>
        <div className="imagecontainer">{
            images.map((imgobj, i)=>{
                console.log(imgobj);
                return <div onClick={()=>setActive(i)} key={imgobj["title"]} style={{ width: "150px", background: `url(${imgobj["image_url"]}) center center / contain no-repeat #aaa` }}></div>
            })
        }</div>
        <div className="slidercontainer">
            <div style={{  }} onClick={()=> active < 1 ? ()=>{} : setActive(i-1)} >Previous</div>
            <div style={{  }}>Next</div>
            {
                images.map((imgobj)=><Slide key={imgobj["title"]} title={imgobj["title"]} image={imgobj["image_url"]} active={imgobj["title"] === active} />)
            }
        </div>
    </div>;
};

export default Slideshow;
