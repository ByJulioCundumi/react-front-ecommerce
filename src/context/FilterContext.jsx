import { useReducer, useContext, createContext } from "react";

const FilterStateContext = createContext()
const FilterDispatchContext = createContext()

const actionTypes = {
    SET_FILTERED_PRODUCTS: "SET_FILTERED_PRODUCTS",
    SET_PRODUCTS: "SET_PRODUCTS"
}

const initialState = {
    filteredProducts: [],
    products: []
}

const filterReducer = (state, action)=>{
    const {type, payload} = action;
    switch(type){
        case actionTypes.SET_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: payload
            }
        case actionTypes.SET_PRODUCTS:
            return {
                ...state,
                products: payload
            }
        default:
            return state;
    }
}

const FilterProvider = ({children})=>{
    const [state, dispatch] = useReducer(filterReducer, initialState)

    return <FilterStateContext.Provider value={state}>
        <FilterDispatchContext.Provider value={dispatch}>
            {children}
        </FilterDispatchContext.Provider>
    </FilterStateContext.Provider>
}

const useFilterState = ()=>{
    return useContext(FilterStateContext)
}

const useFilterDispatchContext = ()=>{
    return useContext(FilterDispatchContext)
}

export {useFilterDispatchContext, useFilterState, actionTypes, FilterProvider}