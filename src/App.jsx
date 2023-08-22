import './App.css'
import Navigation from './components/navigation/Navigation'
import Products from './components/products/Products'
import Recommended from './components/recommended/Recommended'
import Sidebar from './components/sidebar/Sidebar'
import { FilterProvider } from './context/FilterContext'

function App() {

  return (
    <>
    <FilterProvider>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </FilterProvider>
    </>
  )
}

export default App
