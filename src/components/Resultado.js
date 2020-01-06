import React, { Component } from 'react';

class Resultado extends Component {

    showImages = () => {
        const imagenes = this.props.imagenes;
        if(imagenes.length==0) return null;
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">

                </div>
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