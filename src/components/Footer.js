import { Affix } from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";
import "boxicons";

const Footer = () => {
  return (
    <Affix className="footer">
      <div className="footer">
        <p></p>
        <p>
          Contact Us: <br></br>
          address • phone number • email
        </p>
      </div>
    </Affix>
  );
};

export default Footer;
