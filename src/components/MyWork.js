import React from "react";
import "./MyWork.css";
import Cards from "./Cards";

const MyWork = () => {
  return (
    <div className="work-container">
      <h1 className="work-title">This is my work</h1>
      <ul className="cards-container">
        <Cards
          src="./images/medusas.jpg"
          title="Estudio Jurídico React"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus rerum esse magnam, aspernatur veniam facere tenetur, perferendis a sint harum dolor, unde excepturi! Voluptatum, nam ipsam quidem est odio obcaecati."
          tecnologies="react hooks router emailjs"
        />
        <Cards
          src="./images/nemo.jpg"
          title="Lorem ipsum dolor"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus rerum esse magnam, aspernatur veniam facere tenetur, perferendis a sint harum dolor, unde excepturi! Voluptatum, nam ipsam quidem est odio obcaecati."
          tecnologies="Tecnologies used: HTML, CSS, React (With hooks), EMailJS"
          githubLink="https//:www.facebook.com"
        />
      </ul>
      <ul className="cards-container">
        <Cards
          src="./images/cangrejo.jpg"
          title="sit amet consectetur"
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus rerum esse magnam, aspernatur veniam facere tenetur, perferendis a sint harum dolor, unde excepturi! Voluptatum, nam ipsam quidem est odio obcaecati."
          tecnologies="react hooks router emailjs"
        />
        <Cards
          src="./images/tortuga.jpg"
          title="adipisicing elit. Id."
          text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus rerum esse magnam, aspernatur veniam facere tenetur, perferendis a sint harum dolor, unde excepturi! Voluptatum, nam ipsam quidem est odio obcaecati."
          tecnologies="react hooks router emailjs"
        />
      </ul>
    </div>
  );
};

export default MyWork;
