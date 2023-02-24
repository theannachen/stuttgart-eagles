import {Affix, Menu} from "antd";
import { useState, useRef } from "react";
import "./Header.css";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";

const Header = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    // let song = new Audio("star_spangled_banner.mp3");
    const myRef = useRef();

    const togglePlay = () => {
        isPlaying ? myRef.current.pause() : myRef.current.play();
        setIsPlaying(!isPlaying);
        console.log(isPlaying)
    };

    const menu_items = [
        {label: <a href="/board">Meet The Board</a>, key: "bod",},
        {label: <a href="/volunteer">Volunteer</a>, key: "volunteer"}, // which is required
        {label: <a href="/donate">Donate</a>, key: "donate"}, // remember to pass the key prop
        {label: <a href="/">Home</a>, key: "home"},
        {label: (<div id="music">{isPlaying ? <box-icon color="white" class="small-icon" onClick={togglePlay} name='volume-full'></box-icon> : <box-icon color="white" class="small-icon" onClick={togglePlay} name='volume-mute'></box-icon>}</div>), key: "music"},
        {
            label: (
                <a href="/" id="eagle_logo">
                    <img src="/assets/basketball-icon.png" alt="logo" height="50em"/>
                </a>
            ),
            key: "logo",
            id: "eagle_logo",
        },
    ];

    return (
        <Affix className="menu">
            <audio id="audio" ref={myRef} src="star_spangled_banner.mp3" loop="loop" volume="0.5"></audio>
            <Menu items={menu_items} mode="horizontal"/>
        </Affix>
    )
}

export default Header;
