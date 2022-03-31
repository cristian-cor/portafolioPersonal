import React from "react";
import "./Slider.css";
const slidesInfo = [
  {
    src:
      "https://i.pinimg.com/564x/b8/8e/cd/b88ecdf9b57f13f03abe0d93297a236e.jpg",
    alt: "Project 1",
    desc: <a href="https://cristian-cor.github.io/to-do-app/" target="_blank" rel="noreferrer">  </a>,
  },
  {
    src:
      "https://i.pinimg.com/564x/56/b5/90/56b5901b64c829fb4734e7df4de89f6a.jpg",
    alt: "Project 2",
    desc: <a href="https://cristian-cor.github.io/Rick-and-morty/" target="_blank" rel="noreferrer"> </a>,
  },
  {
    src:
      "https://i.pinimg.com/564x/bf/cf/93/bfcf931ad53cced72426a53d39ab878d.jpg",
    alt: "Project 3",
    desc: <a href="https://selecciona-tu-color-picket.netlify.app/" target="_blank" rel="noreferrer"> </a>,
  },
  {
    src:
      "https://i.pinimg.com/736x/71/d2/ad/71d2adfc823e74d2183b702a01997c35.jpg",
    alt: "Project 4",
    desc: <a href="https://startling-palmier-e41cee.netlify.app/ " target="_blank" rel="noreferrer"> </a>,
  },
  {
    src:
      "https://i.pinimg.com/564x/b1/d8/6c/b1d86c95990173b2d56af2399b253d06.jpg",
    alt: "Project 5",
    desc: <h2>Próximamente</h2>
  },
  {
    src:
      "https://i.pinimg.com/564x/b1/d8/6c/b1d86c95990173b2d56af2399b253d06.jpg",
    alt: "Project 6",
    desc: <h2>Próximamente </h2>,
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
