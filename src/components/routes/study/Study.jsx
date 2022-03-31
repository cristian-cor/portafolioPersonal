import React from 'react'
import Navbar from '../../navbar/Navbar'
import './Study.css'

const Study = () => {
  return (
    <div className='container_study'>
    <Navbar/>
<div className="about_container">
    <div className="about_desc">
        <h3>Platzi</h3>
        <p>
            Platzi es una plataforma de educación Online, la cual tengo acceso a más de 600 cursos en diferentes áreas de aprendizaje:
        </p>
        <ul claseName='ul'>
            <li>Desarrollo e ingeniería.</li>
            <li>Diseño y UX.</li>
            <li>Marketing.</li>
            <li>Negocios y emprendimiento.</li>
            <li>Producción audiovisual.</li>
            <li>Crecimiento profesional.</li>
        </ul>
        <p>
            Mi enfoque siempre ha sido el DESARROLLO e INGENIERIA, y cuento con mas de 23 certificados en el area de Desarrollo web y software y cuanto con mas de 750 horas de estudio.
        </p>
    </div>
    <div className="about_img">
        <img
            src="https://www.amvo.org.mx/wp-content/uploads/2021/04/logo-platzi-2.png"
            alt="Platzi"
        />
    </div>
</div>
<div className="about_container">
    <div className="about_desc">
        <h3>Digital House</h3>
        <p>
            Digital House es una organización edtech que potencia al ecosistema tecnológico empoderando a futuros creadores del mundo digital.
        </p>
        <br />
        <p>
            Digital House ofrece formación 100% remota en programación, experiencia del usuario, datos y marketing digital a través de cursos intensivos, capacitaciones a empresas y programas con escuelas.</p>
        <br />
        <p>
            En esta academia me encuentro cursando el progrma de Desarrollador Web Full Stak, la cual tiene una duración de 6,5 meses donde estaremos estudiano de manera intemsiva HTML, CSS, JAVASCRIPT, REACT.JS y NODE.JS.
            <br />
            Con el objetivo de que salgamos con los conocimientos necesario para enfrentarnos en el mundo laboral
        </p>
    </div>
    <div className="about_img">
        <img
            className='dh'
            src="https://images.prismic.io/dh-frontend/89cccff9-e798-47d2-8193-36cf1019a3b5_DigitalHouse_Logo_White.png?auto=compress,format"
            alt="Digital House"
        />
    </div>
</div>
<div className="about_container">
    <div className="about_desc">
        <h3>Universidad CUC</h3>
        <p>
        Me gusta todo lo relacionado con las nuevas tecnologías y el nuevo ámbito que voy a llevar en mi vida.
        <br/>
        Escogí ingeniería de sistemas por bastantes factores que me convencieron:
        otra razón es de tipo familiar ya que mi amigo y mi tío estudiaron la misma carrera y se les ve un futuro seguro tanto económico, social y familiar como académico
        </p>
        <br/>
        <ul>
            <li>
            Decidí estudiar ingeniería de sistemas porque no solo me llama la atención la tecnología si no también me llama la atención la forma como la tecnología facilita problemas que se nos presentan a diario.
            </li>
            <li>
            la segunda razón por la que escogí estudiar ingeniería de sistemas es por la alta tasa de empleo que se presenta para esta carrera.
            </li>
            <li>
            Por ultimo, pero no menos importante, es de tipo social ya que mi amigo y conocidos estudiaron la misma carrera y se les ve un futuro seguro tanto económico, social y familiar como académico.
            </li>
        </ul>

    </div>
    <div className="about_img">
        <img
            className='cuc'
            src="https://cuc.edu.co//images/jem/events/logouniversidaddelacostacuc_1386847920.png"
            alt="Universidad cuc"
        />
    </div>
</div>
<div className='fondo'></div>
</div>
  )
}

export default Study