import "antd/dist/antd.css";
import "./FrontPage.css";
import "./Pages.css";
import "boxicons";
import FullCalendar from "@fullcalendar/react";
import googleCalendarPlugin from "@fullcalendar/google-calendar";
import dayGridPlugin from "@fullcalendar/daygrid";
import CardItems from "../components/CardItems";
import Gallery from "./Gallery";
import Header from "../components/Header"
import Footer from "../components/Footer"
// todo: add links, add calendar, add footer, add logo to top

let API_KEY = process.env.REACT_APP_API_KEY;
let CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;

//adds 'loaded' classname to a element when website loaded
window.onload = function () {
    document.body.className += "loaded";
}

const FrontPage = () => {

    return (
        <div>
            <Header/>
            <div className="wrapper">
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
                    The Stuttgart Eagles Basketball Club (SEBC) is made up of Department
                    of Defense dependents and local youth within the Stuttgart, Germany
                    community. We are going into our tenth year in 2023 as an organization.
                    We operate as a non-profit organization with 100% volunteers.
                    SEBC travels locally and throughout Europe dominating tournaments during
                    basketball season and competing against over 30 International Clubs annually.
                    We represent the USA in a positive manner, both athletically and in sportsmanship.
                    SEBC bridges a gap in the overseas military community for school-age children
                    who are not afforded the experience of competitive Amateur Athletic Union (AAU)
                    and middle school sports during their adolescent years due to their parents
                    serving our Nation abroad. We are also excited to start an Eagles Cheer
                    program this year!  In addition to basketball and cheer, we require our players
                    maintain a high grade point average and have no disciplinary problems.
                    Our goal is to not only give our kids a fighting chance athletically with their
                    stateside counterparts, but also to build kids with character.{" "}
                </p>
            </div>
            <div class="cards">
                <CardItems/>
            </div>
            <br></br><br></br>
            <div id="calendar" class="hidden">
                <FullCalendar
                    plugins={[dayGridPlugin, googleCalendarPlugin]}
                    googleCalendarApiKey={API_KEY}
                    events={{googleCalendarId: CALENDAR_ID}}
                    initialView="dayGridMonth"
                />
            </div>
            <div className="bodyParagraph">
                <br></br>
                <h2>-Gallery-</h2>
                <Gallery />
            </div>
            <Footer/>
            </div>
        </div>
    );
};

export default FrontPage;
