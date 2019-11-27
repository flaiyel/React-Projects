import React, { Component } from 'react';
import Menu from './components/menu';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  cambiarTitulo() {
    this.setState({
      title: "Cualquiera"
    });
  }

  agregarMasMenu(){
    var newOption = this.state.title;
    this.state.menuOptions.push(newOption);
    this.setState({
      menuOptions: this.state.menuOptions
    });
  }

  constructor() {
    super();
    this.state = {
      title: "Primera App",
      menuOptions: ["Inicio", "Clientes", "Usuarios", "Casas"]
    }
    this.cambiarTitulo = this.cambiarTitulo.bind(this);
    this.agregarMasMenu = this.agregarMasMenu.bind(this);
  }

  render() {
    return (
      <div className="App">
        <Menu menuOptions={ this.state.menuOptions }/>
        <div className="container">
          <h1>{ this.state.title }</h1>
          <button
          className="btn btn-primary"
          onClick={ this.cambiarTitulo }>
            Cambiar texto
          </button>
          <button
          className="btn btn-primary"
          onClick={ this.agregarMasMenu }>
            agregar mas menu
          </button>
        </div>

      </div>
    );
  }
}

export default App;
