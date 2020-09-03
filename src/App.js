import React, { Fragment, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  const fecha = new Date().getFullYear();
  // Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);
  const [ carrito, agregarProducto  ] = useState([]);
  return (
    <Fragment>
       <Header 
          titulo='Reserva de Turnos'
        />
        <h1>Lista de Productos</h1>
        {productos.map(producto => (
            <Producto 
                key={producto.id}
                producto={producto}
                productos={productos}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
        
        <Carrito 
            carrito={carrito}
            agregarProducto={agregarProducto}
        />

      <Footer fecha={fecha}></Footer>
    </Fragment>
  )
  /*return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );*/
}

export default App;
