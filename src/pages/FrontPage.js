import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Affix, Menu, Card, Row, Col } from "antd";
import { UserOutlined, DollarOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
// import "./assets/baller.svg";

const items = [
  { label: "Home", to: "/", key: "home" },
  { label: "Donate", key: "donate" }, // remember to pass the key prop
  { label: "Volunteer", key: "volunteer" }, // which is required
  {
    label: "Meet the Board",
    key: "board",
  },
];

const FrontPage = () => {
  return (
    <div>
      <Affix>
        <Menu items={items} mode="horizontal" />
      </Affix>
      <div class="title">
        <h1>Stuttgart Eagles</h1>
        <h3>Demanding Excellence in Everything We Do</h3>
      </div>
      <div class="aboutus">
        <h2>What We Do</h2>
        <p>
          The Stuttgart Eagles are a competitive travel basketball team based in
          Stuttgart, Germany that provides community to deployed families.{" "}
        </p>
      </div>
      <div class="cards">
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <h3>Play</h3>
              <img src="assets/baller.svg" alt="baller" width="18px" />
              <p>See our calendar to find upcoming events.</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <h3>Volunteer</h3>
              <UserOutlined />
              <p>
                Join our team as a coach, board member, or fundraising
                organizer.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <h3>Donate</h3>
              <DollarOutlined />
              <p>
                Your donations fund tournaments, training materials, and
                community projects. Thank you!
              </p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default FrontPage;
