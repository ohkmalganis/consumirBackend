import React, {Component} from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    handleData = (e) => {
        e.preventDefault();
        // get the input value and send to the main component
        const term = this.busquedaRef.current.value;
        this.props.message(term);
    }

    render() {
        return (
            <form onSubmit={this.handleData}>
                <div className="row">
                    <div className="form-group col-md-8">
                        {/*{ this.props.message }*/}
                        <input
                            ref={this.busquedaRef}
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Busca tu imagen. Ejemplo: Futbol"/>
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" value="Buscar" className="btn btn-lg btn-danger btn-block"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;