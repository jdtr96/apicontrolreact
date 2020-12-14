import React, {Component} from 'react';
import Producto from './Producto'

class Productos extends Component{
    constructor (props){
        super (props)

        this.state = {
            productos: [],
            cargando: true
        }
    }

    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/producto/')
        .then(response => response.json())
        .then(pro => this.setState({productos: pro, cargando: false}))
    }

    render (){
        const { productos, cargando } = this.state
        if (cargando){return 'Cargando Datos'}
        return (
            <div class="row row-cols-1 row-cols-md-5 g-4">
                {productos.map((pro) => <Producto producto = {pro}/>)}        
            </div>
        ) 
    }
}

export default Productos