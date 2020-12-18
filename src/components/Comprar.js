import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as productoAction from '../actions/productoAction';


class Comprar extends Component {
    constructor (props){
        super (props)

        this.state = {
            idpro: this.props.match.params.idpro,
            valor: 0,
            mult: 0,
            actua: false
        }; 
    }

    opcancel = () => {
        this.props.history.push('/');
    }

    componentDidMount() {
			this.props.productoID(this.state.idpro);
    }

    compra = () =>{
        if(this.state.valor > 0 && this.state.valor <= this.props.productoid.cantidad){
            let valor1 = this.state.valor
            let valor2 = this.props.productoid.cantidad - valor1
            let valor3 = parseInt(this.props.productoid.cantidad_vendidos) + parseInt(valor1)  

            var com = new Object()
            com.cantidad = valor2
            com.cantidad_vendidos = valor3

            //console.log(this.props.productoid.id, com)

            this.props.pro_compra(this.props.productoid.id, com)
        }

        this.opcancel()
    }

    obtener_valor = (e) => {
        let valor1 = e.target.value
        let mult1 = valor1 * this.props.productoid.p_venta

        this.setState({
            valor: valor1,
            mult: mult1
        })
    }

    render(){
        return (
           <form>
                <div className="container">
                <div className="col">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">{this.props.productoid.nombre}</h3>
                        <h5 className="card-text">PRECIO: Q{this.props.productoid.p_venta}</h5>
                        <br/>
                        <h5 className="card-text">Cantidad a la venta: {this.props.productoid.cantidad}</h5>
                        <br/><br/>
                        <h5 className="card-text">TOTAL {this.state.mult}</h5>
                        <br/><br/>
                        CANTIDAD A COMPRAR
                        <br/>
                        <input type='number' onChange={this.obtener_valor} ></input>
                        <br/><br/>
                        <button className="btn btn-primary btn-sm" onClick={this.opcancel}>
                            CANCELAR    
                        </button>        
                        <button className="btn btn-success btn-sm" onClick={this.compra}>COMPRAR</button>
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

export default connect(mapStateToProps, productoAction)(Comprar);