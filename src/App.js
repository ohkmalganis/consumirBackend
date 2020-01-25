import React, { Component } from 'react';
import Buscador from "./components/Buscador";
import Resultado from "./components/Resultado";

class App extends Component
{

    state = {
        termino: null,
        imagenes: [],
        pagina: null
    };

    scroll = () => {
        const elemento = document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth', 'start');
    };

    prevPage = () => {
        // let pagina = this.state.pagina;
        // pagina--;
        if(this.state.pagina==1) return false;
        this.setState((prevState) => ({
            pagina: prevState.pagina - 1
        }), () => {
            this.getApi();
        });
    };

    nextPage = () => {
        // let pagina = this.state.pagina;
        // pagina++;
        this.setState((prevState) => ({
           pagina: prevState.pagina + 1
        }), () => {
            this.getApi();
            this.scroll();
        });
    };

    getApi = () => {
        const term = this.state.termino;
        const url = `https://pixabay.com/api/?key=14807516-9f19fe57be703023755bd6bff&q=${term}&per_page=30&page=${this.state.pagina}`;
        console.log(url);
        fetch(url).
            then(resp => resp.json()).
            then(resultado => this.setState({ imagenes: resultado.hits }));
    }

    dataSearch = (termino) => {
      this.setState({
          termino: termino,
          pagina: 1
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
            <div className="row justify-content-center">
                <Resultado
                    imagenes={this.state.imagenes}
                    prevPage={this.prevPage}
                    nextPage={this.nextPage}
                />
            </div>
        </div>
    );
    }
}

export default App;
