import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Affix, Menu, Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./FrontPage.css";
import "boxicons";
// todo: add links, add calendar, add footer, add logo to top

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
        <Menu
          items={items}
          mode="horizontal" />
      </Affix>
      <div class="title">
        <div class="title-text">
          <h1>Stuttgart Eagles</h1>
          <h3>Demanding Excellence in Everything We Do</h3>
        </div>
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
            <Card class="parts">
              <h3>Play</h3>
              <box-icon name="basketball"></box-icon>
              <p>
                See upcoming events! Support us at games or sign up for tryouts.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card class="parts">
              <h3>Volunteer</h3>
              <box-icon name="user"></box-icon>
              <p>
                Join our team! We are looking for coaches, board members, and
                fundraisers.
              </p>
            </Card>
          </Col>
          <Col span={8}>
            <Card class="parts">
              <h3>Donate</h3>
              <box-icon name="dollar"></box-icon>
              <p>
                Your donations fund tournaments, training materials, and
                projects.
              </p>
            </Card>
          </Col>
        </Row>
      </div>
      <div class="calendar">
      </div>
    </div>
  );
};

export default FrontPage;
