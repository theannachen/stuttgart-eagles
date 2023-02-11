import "antd/dist/antd.css";
import "./FrontPage.css";
import "./Pages.css";
import "boxicons";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import CardItems from "../components/CardItems";
import Header from "../components/Header";
import Footer from "../components/Footer";
// todo: add links, add calendar, add footer, add logo to top

let API_KEY = process.env.REACT_APP_API_KEY;
let CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;

//adds 'loaded' classname to a element when website loaded
window.onload = function () {
  document.body.className += "loaded";
};

const FrontPage = () => {
  return (
    <div>
      <Header />
      <audio
        id="my_audio"
        src="star_spangled_banner.mp3"
        loop="loop"
        autoPlay="autoplay"
        volume="0.5"
      ></audio>
      <div class="title">
        <div className="banner"></div>
        <div class="title-text">
          <h1>Stuttgart Eagles</h1>
          <h3>Demanding Excellence in Everything We Do</h3>
        </div>
      </div>

      <div class="bodyParagraph">
        <h2 class="hidden">What We Do</h2>
        <p class="hidden">
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
        <CardItems />
      </div>

      <div id="calendar" class="hidden">
        <FullCalendar
          plugins={[dayGridPlugin, googleCalendarPlugin]}
          googleCalendarApiKey={API_KEY}
          events={{ googleCalendarId: CALENDAR_ID }}
          initialView="dayGridMonth"
        />
      </div>
      <Footer />
    </div>
  );
};

export default FrontPage;
