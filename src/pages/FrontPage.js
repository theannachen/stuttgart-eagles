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
import { useEffect, useState } from "react";
// todo: add links, add calendar, add footer, add logo to top

let API_KEY = process.env.REACT_APP_API_KEY;
let CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;

//adds 'loaded' classname to a element when website loaded
window.onload = function () {
    document.body.className += "loaded";
}

const FrontPage = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&timeMin=${new Date().toISOString()}&showDeleted=false&singleEvents=true&maxResults=10&orderBy=startTime`)
            .then((response) => response.json())
            .then((data) => setEvents(data.items.slice(0, 15)));
    }, []);

    function fixDate(date) {
        let d = new Date(date);
        let time = d.toLocaleTimeString();
        return `${d.toLocaleDateString()} \n ${time.substr(0, time.lastIndexOf(":")) + time.substr(time.lastIndexOf(" "), time.length)}`;
    }

    return (
        <div>
            <Header/>
            <div className="wrapper">
                <div className="title_screen"></div>
                <p class="hidden">
                <img className="full_logo" src="/assets/full_logo_cropped.png" />
                </p>
                    <div class="title">
                    <div className="banner"></div>
                    <div class="title-text">
                        <h3>Demanding Excellence in Everything We Do</h3>
                    </div>
                </div>
                <div className="Border">
                    <div className="border_box"></div>
                </div>
                <div class="bodyParagraph">
                    <h1 class="hidden">What We Do</h1>
                    <div className="collage-banner"></div>
                    <img className="photo-collage" src="/assets/photo_collage-two.png" />
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
                <div className="card-banner"></div>
                <div className="cardgrid">
                    <img className="arrow-photo" src="/assets/arrow.png" />
                <div class="cards">
                    <CardItems/>
                </div>
                </div>
                <br></br><br></br>
                <div id="eventsList" >
                    <div className="bodyParagraph"><h2>Upcoming Events</h2></div>
                    <ul class="eventsList">
                        {events.map((event) => (
                            <li key={event.id} class="event" style={{whiteSpace: "pre-line"}}>
                                <p class="date">{fixDate(event.start.dateTime)}</p>
                                <div class="info"><h3>{event.summary}</h3>
                                    {event.location && <p>{event.location}</p>}</div>
                            </li>
                        ))}
                    </ul>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default FrontPage;