import {Affix, Menu} from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";

const Header = () => {
    const menu_items = [
        {label: <a href="/board">Meet The Board</a>, key: "bod",},
        {label: <a href="/volunteer">Volunteer</a>, key: "volunteer"}, // which is required
        {label: <a href="/donate">Donate</a>, key: "donate"}, // remember to pass the key prop
        {label: <a href="/">Home</a>, key: "home"},
        {
            label: (
                <a href="/" id="eagle_logo">
                    <img src="/assets/eagle_logo.png" alt="logo" height="50em"/>
                </a>
            ),
            key: "logo",
            id: "eagle_logo",
        },
    ];

    return (
        <Affix className="menu">
            <Menu items={menu_items} mode="horizontal"/>
        </Affix>
    )
}

export default Header;
