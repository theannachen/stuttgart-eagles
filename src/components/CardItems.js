import {useState} from "react";
import {NavLink} from "react-router-dom";
import {Card, Row, Col} from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/FrontPage.css";
import "boxicons";
// todo: add links, add calendar, add footer, add logo to top

const CardItems = () => {
    const carditems = [
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
    ];
    return (
        <div class="card">
            <Row gutter={6} id="fancyRow" justify="space-around" align="middle" >
            <Col xs={18} sm={8} md={8} lg={8} xl={8}>
                <img className="arrow-photo" src="/assets/arrow.png" /></Col>
                <Col xs={24} sm={15} md={15} lg={15} xl={15} id="secondCol">
                <Row gutter={6} id="fancyRow" justify="space-around" align="middle" >
                {carditems.map((carditems) =>
                    (
                        <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                            <NavLink to={carditems.link}>
                                <div class="mainCard">
                                    <box-icon name={carditems.icon} type='solid' color='#fff' size='lg'></box-icon>
                                    <h3>{carditems.label}</h3>
                                    <p>{carditems.body}</p>
                                </div>
                            </NavLink>
                            <br></br>
                        </Col>
                    ))}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default CardItems;
