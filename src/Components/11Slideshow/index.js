import React, { FC } from "react";
import Slideshow from "./Slideshow";

const SlideshowParent = () => {
    return (
        <div>
            <Slideshow images={images} />
        </div>
    );
};

export default SlideshowParent;

const images = [
    {
        "image_url": "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "mountain"
    },
    {
        "image_url": "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "tree"
    },
    {
        "image_url": "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "holiday"
    },
    {
        "image_url": "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "river"
    },
    {
        "image_url": "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
        "title" : "lake"
    },
    {
        "image_url": "https://images.pexels.com/photos/131723/pexels-photo-131723.jpeg",
        "title" : "spring"
    },
    {
        "image_url": "https://images.pexels.com/photos/356807/pexels-photo-356807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "hill station"
    },
    {
        "image_url": "https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "clouds"
    },
    {
        "image_url": "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "northern lights"
    },
    {
        "image_url": "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title" : "nature"
    }
]