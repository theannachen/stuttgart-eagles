import "./FrontPage.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Volunteer = () => {
    return (
        <div>
            <Header/>
            <div className="wrapper">
            <div className="bodyParagraph">
                <h1>Volunteer Work</h1>
                <p>Our team relies on the compassionate work of our volunteers,
                and numerous volunteer position are open.</p>
                <p>if you wish to volunteer, please reach out to use at
                    stuttgarteaglesbasketball@googlemail.com</p>
                <h2>Coaching</h2>
                <p>
                    The success of many youth sports leagues is rooted in its volunteer coaches.
                    But for our organization and transitional community recruitment can be a seasonal
                    and recurring challenge. If you have a love of basketball and cheer and what to make
                    a difference, reach out to us.
                </p>
                <h2>Board Members</h2>
                <p>
                    Serving on the board is a wonderful way to support our club and mission.
                    It also can be a powerful way to build your own skills and expertise.
                    Individuals who serve on a board have the opportunity to develop and grow as leaders,
                    cultivate new skill sets, and expand their network of peers, professionals,
                    community leaders, and community thought leaders. Are you ready to help?
                </p>
                <h2>Fundraising</h2>
                <p>
                    Want to help but don't have time to commit to a full time board position?
                    Consider leading a fundraiser event. This can be anything from a food or bake sale
                    to a gala or more. The ideas are endless. Join the SEBC team and help inspire others
                    on why the funds are being raised and the importance the our club in the community.
                </p>
            </div>
                <Footer/>
            </div>

        </div>
    )
}

export default Volunteer;