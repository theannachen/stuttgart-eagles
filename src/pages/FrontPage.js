import { NavLink } from "react-router-dom";
import { Affix, Menu, Card, Row, Col } from "antd";
import "antd/dist/antd.css";
import "./FrontPage.css";
import "boxicons";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import CardItems from "../components/CardItems";
// todo: add links, add calendar, add footer, add logo to top

let API_KEY = process.env.REACT_APP_API_KEY;
let CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;

const menu_items = [
  {label: <a href="/board">Meet The Board</a>, key: "board", },
  { label: <a href="/volunteer">Volunteer</a>, key: "volunteer" }, // which is required
  { label: <a href="/donate">Donate</a>, key: "donate" }, // remember to pass the key prop
  { label: <a href="/">Home</a>, key: "home" },
  {
    label: (
      <a href="/" id="eagle_logo">
        <img src="/assets/eagle_logo.png" alt="logo" height="50em" />
      </a>
    ),
    key: "logo",
    id: "eagle_logo",
  },
];


const FrontPage = () => {
  return (
    <div>
      <Affix className="menu">
        <Menu items={menu_items} mode="horizontal" />
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
          Our organization is made up of American military dependent kids whose
          parents are stationed/working for the United States military in
          Stuttgart Germany. We are going into our tenth year in 2022 as an
          organization and our goal continues to be to provide our children the
          training and practice that is as close to what they can get in America
          as possible. We play friendly games against local German youth teams
          and represent the USA in a positive manner, both athletically and in
          sportsmanship. In addition to the actual basketball, we require our
          players maintain a high grade point average and have no disciplinary
          problems at all. Our goal is to not only give our kids a fighting
          chance athletically with their stateside counterparts, but also to
          build kids with character.{" "}
        </p>
      </div>
      <div class="cards">
        <Row gutter={16}>
          <Col span={8}>
            <NavLink to="#calendar">
              <Card>
                <h3>Play</h3>
                <box-icon name="basketball"></box-icon>
                <p>
                  See upcoming events! Support us at games or sign up for
                  tryouts.
                </p>
              </Card>
            </NavLink>
          </Col>
          <Col span={8}>
            <NavLink to="/volunteer">
              <Card>
                <h3>Volunteer</h3>
                <box-icon name="user"></box-icon>
                <p>
                  Join our team! We are looking for coaches, board members, and
                  fundraisers.
                </p>
              </Card>
            </NavLink>
          </Col>
          <Col span={8}>
            <NavLink to="/donate">
              <Card>
                <h3>Donate</h3>
                <box-icon name="dollar"></box-icon>
                <p>
                  Your donations fund tournaments, training materials, and
                  projects.
                </p>
              </Card>
            </NavLink>
          </Col>
        </Row>

      </div>



      <div id="calendar">
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          googleCalendarApiKey={API_KEY}
          events={{ googleCalendarId: CALENDAR_ID }}
          initialView="dayGridMonth"
        />
      </div>
    </div>
  );
};

export default FrontPage;
