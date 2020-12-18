import { TRAER_PRODUCTOS, CARGANDO, ERROR, GUARDADO, ACTUALIZAR, PRODUCTO_ID, COMPRA, PRODUCTOUSUA, LIMPIAR } from '../types/productoTypes';

const INITIAL_STATE = {
	producto: {},
	cargando: false,
    error: '',
    productoid:{},
    productousuario:{},

};

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case TRAER_PRODUCTOS:
            return{
                ...state,
                producto: action.payload,
                cargando: false,
                error: ''
            }
        case CARGANDO:
            return { ...state, cargando: true };
        case ERROR:
            return { ...state, error: action.payload, cargando: false };  
        case ACTUALIZAR:
            return {
                ...state,
                producto: state.producto.map(pro => pro.id === action.payload.id ? (pro = action.payload) : pro)
            }
        case PRODUCTO_ID:
            return{
                ...state,
                productoid: action.payload,
                cargando: false
            }
        case PRODUCTOUSUA:
            return{
                ...state,
                productousuario: action.payload,
                cargando: false
            }

        default: return state;
    }
}