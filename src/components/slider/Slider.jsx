import React from 'react'
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import './Slider.css'

import toDo from '../../media/b88ecdf9b57f13f03abe0d93297a236e.jpg';
import rick from '../../media/rickAndMorty.jpg';
import gogle from '../../media/clonGoogle.jpg';
import colorPicekt from '../../media/colorPicekt.jpg';
import Próximamente from '../../media/proximamente.jpg';

const Slider = () => {


  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h3>Mis Proyectos</h3>
      </div>

      <Carousel

        plugins={[
          'centered',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
          {
            resolve: slidesToScrollPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
        ]}
      >
        <div className="slide-container">
          <img src={toDo} alt='slider-title' />
          <div className="slide-desc">
            <span>
              <a href="https://cristian-cor.github.io/to-do-app/" target="_blank" rel="noreferrer">
                <h2>Ver pagina </h2>
              </a>
            </span>
          </div>
        </div>
        <div className="slide-container">
          <img src={rick} alt='slider-title' />
          <div className="slide-desc">
            <span>
              <a href="https://cristian-cor.github.io/Rick-and-morty/" target="_blank" rel="noreferrer">               <h2>Ver pagina </h2>
              </a>
            </span>
          </div>
        </div>
        <div className="slide-container">
          <img src={gogle} alt='slider-title' />
          <div className="slide-desc">
            <span>
              <a href="https://startling-palmier-e41cee.netlify.app/ " target="_blank" rel="noreferrer">               <h2>Ver pagina </h2>
              </a>
            </span>
          </div>
        </div>
        <div className="slide-container">
          <img src={colorPicekt} alt='slider-title' />
          <div className="slide-desc">
            <span>
              <a href="https://selecciona-tu-color-picket.netlify.app/" target="_blank" rel="noreferrer">               <h2>Ver pagina </h2>
              </a>
            </span>
          </div>
        </div>
        <div className="slide-container">
          <img src={Próximamente} alt='slider-title' />
          <div className="slide-desc">
            <span>
              <a href="#" target="_blank" rel="noreferrer">
                <h2>Ver pagina </h2>
              </a>
            </span>
          </div>
        </div>
        <div className="slide-container">
          <img src={Próximamente} alt='slider-title' />
          <div className="slide-desc">
            <span>
              <a href="#" target="_blank" rel="noreferrer">
                <h2>Ver pagina </h2>
              </a>
            </span>
          </div>
        </div>

      </Carousel>
    </div>
  )
}

export default Slider