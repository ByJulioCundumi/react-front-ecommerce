import './App.css'
import Navigation from './components/navigation/Navigation'
import Products from './components/products/Products'
import Recommended from './components/recommended/Recommended'
import Sidebar from './components/sidebar/Sidebar'

function App() {

  return (
    <>
      <Sidebar/>
      <Navigation/>
      <Recommended/>
      <Products/>
    </>
  )
}

export default App
