import React, { Component } from 'react';
import Buscador from "./components/Buscador";

class App extends Component
{

    state = {
        termino: null
    };

    dataSearch = (term) => {
      this.setState({
          termino: term
      })
    }

    render() {
    return (
        <div className="app container">
          <div className="jumbotron">
              <p className="lead text-center">
                  Buscador de imagenes
              </p>
              <Buscador
                message={this.dataSearch}
              />
              { this.state.termino }
          </div>
        </div>
    );
    }
}

export default App;
