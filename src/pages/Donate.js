import "./FrontPage.css";
import Header from "../components/Header"
import Footer from "../components/Footer"

const Donate = () => {
    return (
        <div>
            <Header/>
            <div className="bodyParagraph">
                <h1>Donate</h1>
                <p>The team relies on your generous donations.</p>
                <div className="underline"></div>
            </div>
            <Footer/>
        </div>
    );
};

export default Donate;
