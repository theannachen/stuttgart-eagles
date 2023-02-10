import {Card, Row, Col} from "antd";
import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/Gallery.css";

    const photos = [
        {
            original: "/assets/waving_flag.jpg",
            description: "template description",

        },
        {
            original: "/assets/ballin.jpg",
            description: "template description",

        },
        {
            original: "/assets/coaching.jpg",
            description: "template description",

        },
        {
            original: "/assets/happiness.jpg",
            description: "template description",

        },
        {
            original: "/assets/younger_players.jpg",
            description: "template description",

        },
        {
            original: "/assets/huddle.jpg",
            description: "template description",

        },
        {
            original: "/assets/mascot.jpg",
            description: "our mascot, big bird!",

        },
        {
            original: "/assets/more_coaching.jpg",
            description: "template description",

        },
        {
            original: "/assets/stuttgart_eagles.jpg",
            description: "template description",

        },
        {
            original: "/assets/teamwork.jpg",
            description: "template description",

        },
        {
            original: "/assets/very_bright.jpg",
            description: "template description",

        },
        {
            original: "/assets/victory.jpg",
            description: "template description",

        },
    ]
    class MyGallery extends React.Component {
        render() {
            return <ImageGallery items={photos} />;
        }
    }

export default MyGallery;

