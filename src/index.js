import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const root = document.getElementById("root");
//const elemento = React.createElement(componente, propiedades, hijos)

//const elemento = React.createElement("h1", {className: "saludo"}, "hello world");

ReactDOM.render(<App />, root);