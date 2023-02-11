import "../pages/Pages.css";
import "../pages/Board.css";
import { Card } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;

// <Card
//     hoverable
//     style={{ width: 400 }}
//     cover={
//         <img
//             alt={board.name}
//             src={board.image}
//         />
//     }
// >
//     <Meta title={board.name} description={board.role} />
// </Card>

const BoardCard = ({ board }) => (
  <div className="bodyParagraph">
    <img alt={board.name} src={board.image} />
    <h2>{board.name}</h2>
    <h3>{board.role}</h3>
  </div>
);

export default BoardCard;
