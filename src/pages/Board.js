import "./Board.css";
import "./Pages.css";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const people = [
  {
    name: "Huntley Guthrie",
    role: "Director",
    image: "/assets/huntley.jpg",
  },
  {
    name: "Ryan Roseberry",
    role: "Vice Director",
    image: "/assets/ryan.jpg",
  },
  {
    name: "Jessica Brown",
    role: "Secretary",
    image: "/assets/jessica.jpg",
  },
  {
    name: "Shawn Gilliland",
    role: "Treasurer",
    image: "/assets/shawn.jpg",
  },
  {
    name: "Nadia Pontif",
    role: "Social Media Coordinator",
    image: "/assets/currently_unnamed.jpg",
  },
  {
    name: "Stephanie Lee",
    role: "Fundraising Coordinator",
    image: "/assets/stephanie.jpg",
  },
  {
    name: "Mike DeRosier",
    role: "Event Coordinator",
    image: "/assets/derosier.jpg",
  },
  {
    name: "Mike Stevenson",
    role: "Event Coordinator",
    image: "/assets/stevenson.jpg",
  },
];

const Board = () => {
  return (
    <div>
      <Header />
      <div className="bodyParagraph">
        <h1>Meet the Board</h1>
        <br></br>
        <Row gutter={20}>
          {people.map((board) => (
            <Col span={12}>
              <div className="boardcard">
                <img className="boardpic" src={board.image} />
                <h2>{board.name}</h2>
                <h3>{board.role}</h3>
                <br></br>
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </div>
  );
};

export default Board;
