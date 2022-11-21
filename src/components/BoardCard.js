import { Card } from "antd";
import "antd/dist/antd.css";

const { Meta } = Card;

const BoardCard = ({ board }) => (
  <Card
    hoverable
    style={{ width: 400 }}
    cover={
      <img
        alt={board.name}
        src={board.image}
      />
    }
  >
    <Meta title={board.name} description={board.role} />
  </Card>
);

export default BoardCard;