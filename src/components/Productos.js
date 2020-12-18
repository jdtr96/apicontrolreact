import React, {Component} from 'react';
import { connect } from 'react-redux';
import Producto from './Producto';

import * as productoAction from '../actions/productoAction'

class Productos extends Component{

    componentDidMount() {
		this.props.traerProductos();
    }

    agregarContenido = () => {
        const { producto, cargando, error } = this.props;

		if (cargando) {
			return <h1>CARGANDO:::::::::</h1>;
		}

		if (error) {
			return <h1>{ error }</h1>;
		}

        if(producto.length >= 0){
		    return <div className="row row-cols-1 row-cols-md-5 g-4">
                        {producto.map((pro, key) => <Producto {...pro} key={key}/>)}        
                   </div>      
        }
	};

    render (){
        return (
            <div className="container">
                {this.agregarContenido()}        
            </div>
        ) 
    }
}

const mapStateToProps = (reducers) => {
	return reducers.productoReducer;
};

export default connect(mapStateToProps, productoAction)(Productos)