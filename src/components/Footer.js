import {Affix} from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";

const Footer = () => {

    return (
        <Affix>
            <div className="footer">
                <p></p>
                <p>
                    Contact Us: <br></br>
                    address • phone number • email
                </p>
            </div>
        </Affix>
    )
}

export default Footer;
