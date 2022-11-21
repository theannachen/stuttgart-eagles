import BoardCard from "../components/BoardCard";

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
    name: "Currently Unnamed",
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
      <h1>Meet the Board</h1>
      {people.map((person) => (
        <BoardCard board={person} />
      ))}
    </div>
  );
};

export default Board;
