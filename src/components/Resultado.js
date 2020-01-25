import React, { Component } from 'react';
import Imagen from "./Imagen";
import Paginacion from "./Paginacion";

class Resultado extends Component {

    showImages = () => {
        const imagenes = this.props.imagenes;
        if(imagenes.length==0) return null;
        return (
            <React.Fragment>
                {/*<Paginacion*/}
                {/*    prevPage={this.props.prevPage}*/}
                {/*    nextPage={this.props.nextPage}*/}
                {/*/>*/}
                <div className="col-12 p-5 row">
                    {
                        imagenes.map(imagen => (
                          <Imagen
                            key={imagen.id}
                            imagen={imagen}
                          />
                        ))
                    }
                </div>
                <Paginacion
                    prevPage={this.props.prevPage}
                    nextPage={this.props.nextPage}
                />
            </React.Fragment>
        )
    }

    render() {
        return (
            // <React.Fragment></React.Fragment>
            <div>{ this.showImages() }</div>
        );
    }
}

export default Resultado;