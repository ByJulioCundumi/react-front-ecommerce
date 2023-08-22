import { useReducer, useContext, createContext } from "react";

const FilterStateContext = createContext()
const FilterDispatchContext = createContext()

const actionTypes = {
    SET_CATEGORY: "SET_CATEGORY",
    SET_QUERY: "SET_QUERY",
    SET_FILTERED_PRODUCTS: "SET_FILTERED_PRODUCTS",
    SET_SELECTED: "SET_SELECTED",
    SET_PRICE: "SET_PRICE"
}

const initialState = {
    category: null,
    query: "",
    selected: "",
    price: "",
    filteredProducts: []
}

const filterReducer = (state, action)=>{
    const {type, payload} = action;
    switch(type){
        case actionTypes.SET_CATEGORY: 
            return {
                ...state,
                category: payload
            }
        case actionTypes.SET_QUERY:
            return {
                ...state,
                query: payload
            }
        case actionTypes.SET_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProducts: payload
            }
        case actionTypes.SET_SELECTED:
            return {
                ...state,
                selected: payload
            }
        case actionTypes.SET_PRICE:
            return {
                ...state,
                price: payload
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