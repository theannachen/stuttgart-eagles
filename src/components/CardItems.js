import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Card, Row, Col} from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";
import "boxicons";
// todo: add links, add calendar, add footer, add logo to top

const CardItems = () => {
    const [carditems, setcarditems] = useState([
        {
            link: "/board",
            label: "Meet the Board",
            icon: "basketball",
            body: "See the team that made all of this possible."
        },
        {
            link: "/volunteer",
            label: "Volunteer",
            icon: "user",
            body: "Join our team! We are looking for coaches, board members, and fundraisers."
        },
        {
            link: "/donate",
            label: "Donate",
            icon: "dollar",
            body: "Your donations fund tournaments, training materials, and projects."
        }
    ]);
    return (
        <div class="card">
            <Row gutter={6} justify="space-around" align="middle" style={{marginBottom: 50}}>
                {carditems.map((carditems) =>
                    (
                        <Col xs={12} sm={10} md={10} lg={10} xl={10}>
                            <NavLink to={carditems.link}>
                                <Card>
                                    <h3>{carditems.label}</h3>
                                    <p>{carditems.body}</p>
                                </Card>
                            </NavLink>
                            <br></br>
                        </Col>
                    ))}
            </Row>
        </div>
    )
}

export default CardItems;
