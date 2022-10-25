import {useState} from 'react';
import {NavLink} from 'react-router-dom';

const FrontPage = () => {
    return (
      <div>
        <h1>Stuttgart Eagles</h1>
        <h3>Demanding Excellence in Everything We Do</h3>
        <h2>What We Do</h2>
        <p>The Stuttgart Eagles are a competitive travel basketball team based in Stuttgart, Germany that provides community to deployed families. </p>
        <h3>Play</h3>
        <p>See our calendar to find upcoming events.</p>
        <h3>Volunteer</h3>
        <p>Join our team as a coach, board member, or fundraising organizer.</p>
        <h3>Donate</h3>
        <p>Your donations fund tournaments, training materials, and community projects.</p>
      </div>
    );
}

export default FrontPage;