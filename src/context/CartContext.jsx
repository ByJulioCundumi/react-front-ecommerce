import { createContext, useContext, useReducer } from "react";

const cartActionTypes = {
    SET_CART_STATUS: "SET_CART_STATUS",
}

const cartReducer = (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case cartActionTypes.SET_CART_STATUS:
            return {...state, isCartOpen: payload}
        break;
        default: return state;
    }
}

const cartContext = createContext()

const initialState = {
    isCartOpen: false
}

const CartStateProvider = ({children})=>{
    const [cartState, dispatch] = useReducer(cartReducer, initialState)

    return <cartContext.Provider value={{isCartOpen: cartState.isCartOpen, cartDispatch: dispatch}}>
        {children}
    </cartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(cartContext)
}

export {CartStateProvider, useCartContext, cartActionTypes}