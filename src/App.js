import React, { Fragment } from 'react';
import "./styles/styles.scss";
import Curso from './Curso'

const App = () => (
  <>
  
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://edteam-media.s3.amazonaws.com/courses/original/bcb63ac0-5dc5-48b7-a111-9974a7fc3bcd.png"></img>
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="#" class="button">Suscribe</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
  <Curso></Curso>
  <Curso></Curso>
  <Curso></Curso>
  <Curso></Curso>
  <Curso></Curso>

  <Curso></Curso>
  <Curso></Curso>
  <Curso></Curso>
  <Curso></Curso>
  <Curso></Curso>
</div>
  </>
)

export default App;

// Reglas JSX
// Los componenetes deben cerrarce
// Los componentes deben devolver un solo elemento padre
// apoyarse de los fragments cuando necesito devolver 2 elementos
//  Fragmanet o <></>
