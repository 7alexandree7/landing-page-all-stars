import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Product from './components/Product/Product'

function App() {

  return (
    <main className='app-container'>
      <NavBar />
      <Product />
      <Footer />
    </main>
  )
}

export default App
