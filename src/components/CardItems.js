import {useState} from "react";
import {NavLink} from "react-router-dom";

const CardItems = () => {
const [carditems, setcarditems] = useState([
    {link: "#calander", label: "Play", icon: "basketball", body:"See upcoming events! Support us at games or sign up for tryouts."},
    {link: "/volunteer", label: "Volunteer", icon: "user", body: "Join our team! We are looking for coaches, board members, and fundraisers."},
    {link: "/donate", label: "Donate", icon: "dollar", body: "Your donations fund tournaments, training materials, and projects."}
]);
return (

        <div className = "card-grid">
            {carditems.map((carditems) =>
                (<div className = "ant-card">
                        <NavLink to={carditems.link}>
                            <h3>{carditems.label}</h3>
                            <box-icon name={carditems.icon}></box-icon>
                            <p>{carditems.body}</p>
                        </NavLink>
                </div>))}
        </div>

)
}

export default CardItems;
