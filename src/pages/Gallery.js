import {Card, Row, Col} from "antd";
import "antd/dist/antd.css";
import "../pages/Pages.css";
import "../pages/Gallery.css";
import "boxicons";

const Gallery = () => {
    const photos = [
        "/assets/waving_flag.jpg",
        "/assets/ballin.jpg",
        "/assets/coaching.jpg",
        "/assets/happiness.jpg",
        "/assets/younger_players.jpg",
        "/assets/huddle.jpg",
        "/assets/mascot.jpg",
        "/assets/more_coaching.jpg",
        "/assets/stuttgart_eagles.jpg",
        "/assets/teamwork.jpg",
        "/assets/very_bright.jpg",
        "/assets/victory.jpg",
    ]
    return (
        <div class="photos">
            <Row gutter={0}>
                {photos.map((photo) =>
                    (
                        <div className="container">
                            <img className="galleryimg" src={photo}/>
                        </div>

                    ))}
            </Row>
        </div>
    )
}

export default Gallery;
