import React, {Component} from 'react';
import { ThemeProvider } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as productoAction from '../actions/productoAction';
import { getUser, getToken, removeUserSession } from '../Utils/Common';

class EditarProducto extends Component{

    constructor (props){
        super (props);

        this.state = {
            nombre: this.props.productoid.nombre,
            pcompra: this.props.productoid.p_conpra,
            pventa: this.props.productoid.p_venta,
            cantidad: this.props.productoid.cantidad,
            cantidadV: this.props.productoid.cantidad_vendidos

        }; 

        this.getNombre = this.getNombre.bind(this);
        this.getPcompra = this.getPcompra.bind(this);
        this.getPventa = this.getPventa.bind(this);
        this.getCantidad = this.getCantidad.bind(this);
        this.getCantidadV = this.getCantidadV.bind(this);
        this.opcancel = this.opcancel.bind(this);
        this.getData = this.getData.bind(this);
    }

    opcancel = () => {
        this.props.history.push('/home');
        
    }

    componentDidMount() {
        this.props.productoID(this.props.match.params.id);
        
    }

    getNombre(e){
        const valor = e.target.value
        this.setState({ nombre: valor })
    }

    getPcompra(e){
        const valor = e.target.value
        this.setState({ pcompra: valor  })
    }

    getPventa(e){
        const valor = e.target.value
        this.setState({ pventa: valor  })
    }

    getCantidad(e){
        const valor = e.target.value
        this.setState({ cantidad: valor  })
    }

    getCantidadV(e){
        const valor = e.target.value
        this.setState({ cantidadV: valor  })
    }
    
    getData(){
        var pro = new Object()
        pro.id = this.props.match.params.id
        pro.nombre = this.state.nombre
        pro.cantidad = this.state.cantidad
        pro.p_conpra = this.state.pcompra
        pro.p_venta = this.state.pventa
        pro.cantidad_vendidos = this.state.cantidadV
        pro.user = this.props.productoid.user
        this.props.comprar(pro, getToken())
        this.props.history.push('/home');

    }

    render(){
        return(
            <form>
                <div className="container">
                <div className="col">
                <div className="card">
                    <div className="card-body">
                        <label>Nombre:</label>
                        <input type='text' onChange={ this.getNombre } defaultValue={this.state.nombre} ></input>
                        <br/> <br/>
                        <label>Precio Compra:</label>
                        <input type='text' onChange={ this.getPcompra } defaultValue={this.state.pcompra} ></input>
                        <br/> <br/>
                        <label>Precio Venta:</label>
                        <input type='text' onChange={ this.getPventa } defaultValue={this.state.pventa} ></input>
                        <br/> <br/>
                        <label>Cantidad para vender:</label>
                        <input type='text' onChange={ this.getCantidad } defaultValue={this.state.cantidad} ></input>
                        <br/> <br/>
                        <label>Cantidad vendidos:</label>
                        <input type='text' onChange={ this.getCantidadV } defaultValue={this.state.cantidadV} ></input>
                        <br/> <br/>
                        <button className="btn btn-primary btn-sm" onClick={this.opcancel}>
                            Cancela
                        </button>        
                        <button type="button" className="btn btn-success btn-sm" onClick={this.getData}>Actualizar </button>
                    </div>
                    </div>
                    </div>
                </div>  
           </form>
        )
    }
}

const mapStateToProps = (reducers) => {
	return reducers.productoReducer;
};

export default connect(mapStateToProps, productoAction)(EditarProducto);