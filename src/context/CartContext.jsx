import { createContext, useContext, useReducer } from "react";

const cartActionTypes = {
    SET_CART_STATUS: "SET_CART_STATUS",
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    INCREASE_ITEM_QUANTITY: "INCREASE_ITEM_QUANTITY",
    DECREASE_ITEM_QUANTITY: "DECREASE_ITEM_QUANTITY"
}

const cartReducer = (state, action)=>{
    const {type, payload} = action;

    switch(type){
        case cartActionTypes.SET_CART_STATUS:
            return {...state, isCartOpen: payload}
        break;
        
        case cartActionTypes.ADD_TO_CART:

            const foundItem = state.cartItems.findIndex((i)=>{
                return i.title === payload.title
            })
  
            if(foundItem !== -1){
                const items = [... state.cartItems]
                return {...state};
            } else{
                return {...state, cartItems: [...state.cartItems, payload]}
            }
        break

        case cartActionTypes.INCREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((i)=>{
                    return i.title === payload ? {...i, quantity: i.quantity + 1} : i
                })
            }
        break
        
        case cartActionTypes.DECREASE_ITEM_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((i)=>{
                    return i.title === payload ? {...i, quantity: i.quantity <= 1 ? 1 : i.quantity - 1} : i
                })
            }
        break

        case cartActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((i)=>{
                    return i.title !== payload
                })
            }
        break;

        default: return state;
    }
}

const cartContext = createContext()

const initialState = {
    isCartOpen: false,
    cartItems: []
}

const CartStateProvider = ({children})=>{
    const [cartState, dispatch] = useReducer(cartReducer, initialState)

    return <cartContext.Provider value={{isCartOpen: cartState.isCartOpen, cDispatch: dispatch, cartItems: cartState.cartItems}}>
        {children}
    </cartContext.Provider>
}

const useCartContext = ()=>{
    return useContext(cartContext)
}

export {CartStateProvider, useCartContext, cartActionTypes}