import axios from 'axios';
import { TRAER_PRODUCTOS, CARGANDO, ERROR, GUARDADO, ACTUALIZAR, PRODUCTO_ID, COMPRA, PRODUCTOUSUA, LIMPIAR} from '../types/productoTypes';
import { push } from "react-router-redux";

export const traerProductos = () => async (dispatch) => {
    dispatch({
		type: CARGANDO
	});

    try {
        const respuesta = await axios.get('http://127.0.0.1:8000/api/producto/');
        
		dispatch({
			type: TRAER_PRODUCTOS,
            payload: respuesta.data
            
		})
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'Productos no disponibles.'
		})
	}
};

export const pro_compra = (id, compra) => async (dispatch) => {
	console.log(id, compra)
	dispatch({
		type: CARGANDO
	});

	try {
		const respuesta = await axios.patch(`http://127.0.0.1:8000/api/producto/${id}/`, compra);
		dispatch({
			type: ACTUALIZAR,
			payload: respuesta.data
		});
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'No se pudo Acceder en este momento.'
		});
	}
}

export const productoID = (productoid) => async (dispatch) => {
	dispatch({
		type: CARGANDO
	});

	console.log(productoid)

	try {
		const respuesta = await axios.get(`http://127.0.0.1:8000/api/producto/${productoid}/`);
		dispatch({
			type: PRODUCTO_ID,
			payload: respuesta.data
		});
		
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'No se pudo Acceder en este momento.'
		});
	}
}

export const comprar = (productoA, token) => async (dispatch) => {
	dispatch({
		type: CARGANDO
	});
	console.log("consulta----")
	console.log(productoA.nombre)
	console.log(token)

	
	try {
		fetch(`http://127.0.0.1:8000/api/producto/${productoA.id}/`,{
					method: "PUT",
                    headers: {
                        Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: "Token "+token
                    },
                    body: JSON.stringify({
                        ...productoA
                    })
                    })
		
		.then(response => response.json())
		.then(response => {
			dispatch(push(`/home`))
			});
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'No se pudo guardar en este momento.'
		});
	}
}



export const producto_usuario = (token) => async (dispatch) => {
	dispatch({
		type: CARGANDO
	});

	const authAxios = axios.create({
		baseURL: 'http://127.0.0.1:8000/api/producto/',
		headers:{
			Authorization: `Token ${token}`
		}
	})

	try {
		const respuesta = await authAxios.get();
		dispatch({
			type: PRODUCTOUSUA,
			payload: respuesta.data

		});
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'No se pudo guardar en este momento.'
		});
	}
}

export const eliminar_producto = (token, id) => async (dispatch) => {

	try {
		fetch(`http://127.0.0.1:8000/api/producto/${id}/`,{
					method: "DELETE",
                    headers: {
						Authorization: "Token "+token
                    },
        })
		.then(
			dispatch(push(`/home`))
			);
	}
	catch (error) {
		console.log(error.message);
		dispatch({
			type: ERROR,
			payload: 'No se pudo guardar en este momento.'
		});
	}
}

export const limpiar = () => (dispatch) => {
	dispatch({
		type: LIMPIAR
	})
}