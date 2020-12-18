import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Producto extends Component{

    render() {
        
        return(
            <>
                <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.nombre}</h3>
                        <h5 className="card-text">PRECIO: Q{this.props.p_venta}</h5>
                        <br/>
                        <h5 className="card-text">Cantidad a la venta: {this.props.cantidad}</h5>
                        <br/><br/>
                        <Link to={`/comprar/${this.props.id}/`} style={{ textDecoration: 'none', color:'white' }}>
                        <button className="btn btn-success btn-sm">
                            COMPRAR
                        </button>        
                        </Link>
                        
                    </div>
                </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (reducers) => {
	return reducers.productoReducer;
};

export default connect(mapStateToProps)(Producto);