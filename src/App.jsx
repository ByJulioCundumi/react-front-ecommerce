import './App.css'
import Navigation from './components/navigation/Navigation'
import Products from './components/products/Products'
import Recommended from './components/recommended/Recommended'
import Sidebar from './components/sidebar/Sidebar'
import { CartStateProvider } from './context/CartContext'
import { FilterProvider } from './context/FilterContext'

function App() {

  return (
    <>
    <FilterProvider>
      <CartStateProvider>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
      </CartStateProvider>
    </FilterProvider>
    </>
  )
}

export default App
