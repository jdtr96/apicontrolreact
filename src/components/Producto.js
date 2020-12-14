import React, {Component} from 'react';
import { ModalFooter } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
class Producto extends Component{
    cant = this.props.producto.cantidad
    canti = parseInt(this.props.producto.cantidad)
    canti2 = parseInt(this.props.producto.cantidad_vendidos)
   
    constructor (props){
        super (props)

        this.state = {
            modal_abierto: false,
            habilitar: false,
            valor: 0
        }
    }

    obtener_valor = (event) => {
        console.log(event.target.value)
        this.setState({valor: event.target.value})
    }

    abrirModal=()=>{
        this.setState({modal_abierto: !this.state.modal_abierto})
    }

    comprar = async e =>{
        e.preventDefault()
        try{
            if(this.state.valor <= this.cant){
                this.setState({habilitar: true})
                
                this.canti = parseInt(this.canti) - parseInt(this.state.valor)
                this.canti2 = parseInt(this.canti2) + parseInt(this.state.valor)
                console.log(this.canti, this.canti2)
                fetch(`http://127.0.0.1:8000/api/producto/${this.props.producto.id}/`, {
                    method: "PATCH",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        cantidad:this.canti, 
                        cantidad_vendidos:this.canti2
                    })
                    })
                    .then(response => response.json())
                    
                    };         
        }catch(error){
            console.log(error)
        }

        this.setState({modal_abierto: false,})
    }


    render() {
        const { producto } = this.props
        return(
            <>
                <div class="col">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{producto.nombre}</h3>
                            <h7 class="card-text">PRECIO: Q{producto.p_venta}</h7>
                            <br/>
                            <h7 class="card-text">Cantidad a la venta: {producto.cantidad}</h7>
                            <br/><br/>
                            <button class="btn btn-success btn-sm" onClick={this.abrirModal}>COMPRAR</button>
                        </div>
                    </div>
                </div>

                <Modal show={this.state.modal_abierto} onHide={this.state.modal_abierto}>
                    <Modal.Header>
                        <h3>{producto.nombre}</h3>
                    </Modal.Header>
                    <Modal.Body>
                        PRECIO: Q{producto.p_venta}
                        <br/>
                        CANTIDAD A LA VENTA: {producto.cantidad}
                        <br/>
                        <br/>
                        CANTIDAD A COMPRAR
                        <br/>
                        <input typeof="number" onChange={this.obtener_valor}></input>
                    </Modal.Body>
                    <Modal.Footer>
                    <button class="btn btn-secondary btn-sm" onClick={this.abrirModal}>
                        CANCELAR
                    </button>
                    <button class="btn btn-success btn-sm" onClick={this.comprar}>
                        COMPRAR
                    </button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}

export default Producto;