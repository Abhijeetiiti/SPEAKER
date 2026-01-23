import React from "react";
import "./TeamCards.css";

const TeamCards = () => {
  const cards = [
    {
      img: "https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg",
      name: "Aarav Sharma",
      role: "Creative Designer",
      social: {
        facebook: "https://facebook.com/aarav",
        twitter: "https://twitter.com/aarav",
        instagram: "https://instagram.com/aarav",
      },
    },
    {
      img: "https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg",
      name: "Riya Verma",
      role: "UI Developer",
      social: {
        facebook: "https://facebook.com/riya",
        twitter: "https://twitter.com/riya",
        instagram: "https://instagram.com/riya",
      },
    },
    {
      img: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg",
      name: "Kabir Singh",
      role: "Product Designer",
      social: {
        facebook: "https://facebook.com/kabir",
        twitter: "https://twitter.com/kabir",
        instagram: "https://instagram.com/kabir",
      },
    },
    {
      img: "https://images.pexels.com/photos/2746187/pexels-photo-2746187.jpeg",
      name: "Neha Patel",
      role: "Marketing Lead",
      social: {
        facebook: "https://facebook.com/neha",
        twitter: "https://twitter.com/neha",
        instagram: "https://instagram.com/neha",
      },
    },
    {
      img: "https://images.pexels.com/photos/381843/pexels-photo-381843.jpeg",
      name: "Arjun Mehta",
      role: "Frontend Engineer",
      social: {
        facebook: "https://facebook.com/arjun",
        twitter: "https://twitter.com/arjun",
        instagram: "https://instagram.com/arjun",
      },
    },
    {
      img: "https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg",
      name: "Simran Kaur",
      role: "UX Researcher",
      social: {
        facebook: "https://facebook.com/simran",
        twitter: "https://twitter.com/simran",
        instagram: "https://instagram.com/simran",
      },
    },
  ];

  return (
    <div className="container">
      <div className="team-grid">
        {cards.map((card, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={card.img} alt={card.name} />
            </div>

            <div className="card-content">
              <h4>{card.name}</h4>
              <h5>{card.role}</h5>

              <ul className="social-icons">
                <li style={{ "--i": 1 }}>
                  <a href={card.social.facebook} target="_blank" rel="noreferrer">
                    <span className="fa-brands fa-facebook-f"></span>
                  </a>
                </li>
                <li style={{ "--i": 2 }}>
                  <a href={card.social.twitter} target="_blank" rel="noreferrer">
                    <span className="fa-brands fa-twitter"></span>
                  </a>
                </li>
                <li style={{ "--i": 3 }}>
                  <a
                    href={card.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="fa-brands fa-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCards;

