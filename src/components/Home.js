import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as productoAction from '../actions/productoAction'
import { getUser, getToken, removeUserSession } from '../Utils/Common';
import { Link } from 'react-router-dom'

class Home extends Component{
  user = getUser();

  handleLogout = () => {
    removeUserSession();
    this.props.history.push('/login');
  }

  eliminar(id){
    //this.props.eliminar_producto(getToken(),id)
  }
  componentDidMount(){
    
    this.props.producto_usuario(getToken())
    
  }

  agregarContenido = () => {
    const { productousuario, cargando, error } = this.props;
    
    if (cargando) {
        return <h1>CARGANDO:::::::::</h1>;
      }

      if (error) {
        return <h1>{ error }</h1>;
      }

      if(productousuario.length >= 0){

        
      return <>
            <table className="table table-active text-center">
                <thead className="thead-dark">
                  <tr>
                    <th>Nombre</th>
                    <th>Precio de Compra</th>
                    <th>Precio de Venta</th>
                    <th>Cantidad</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {productousuario.map((pro, key) => 
                  <tr key={key}>
                  <td>{pro.nombre}</td>
                    <td>
                    {pro.p_conpra}
                    </td>
                    <td>{pro.p_venta}</td>
                    <td>{pro.cantidad}</td>
                    <td>
                    <Link to={`/update/${pro.id}/`} style={{ textDecoration: 'none', color:'white' }}>
                    <button className="btn btn-success btn-sm" >
                      EDITAR
                    </button> 
                    </Link>
                    </td>
                    <td>
                    <input onClick={this.eliminar(pro.id)} type="submit" value="Eliminar" className="btn btn-danger" />
                    </td>
                  </tr>  
                )}   
                </tbody>
                </table>    
                </> 
      }
};

  render(){
    return (
      <div>
        <input type="button" onClick={this.handleLogout} value="Logout" />
        <br/>
        <br/>
        <div className="container">
            {this.agregarContenido()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
	return reducers.productoReducer;
};

export default connect(mapStateToProps, productoAction)(Home);
