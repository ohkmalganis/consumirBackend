import React, { Component } from 'react';
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";
import Imagen from "./components/Imagen";

class App extends Component
{

    state = {
        termino: null,
        imagenes: []
    };

    getApi = () => {
        const term = this.state.termino;
        const url = `https://pixabay.com/api/?key=14807516-9f19fe57be703023755bd6bff&q=${this.state.termino}&per_page=30`;
        // console.log(url);
        fetch(url).
            then(resp => resp.json()).
            then(resultado => this.setState({ imagenes: resultado.hits }));
    }

    dataSearch = (termino) => {
      this.setState({
          termino
      }, () => {
          this.getApi();
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
          </div>
            <div>
                <Resultado
                    imagenes={this.state.imagenes}
                />
            </div>
            <div>
                <Imagen />
            </div>
        </div>
    );
    }
}

export default App;
