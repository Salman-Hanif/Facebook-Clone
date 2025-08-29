import { Outlet } from 'react-router-dom'
import './App.css'
import Container from './Components/Container'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Preloader from './Components/Preloader'

function App() {
  return (
    <Container>
      <Preloader/>
      <Navbar/>
      <div className='flex w-full pt-[60px]'>
      <Sidebar/>
      <Outlet/>
      </div>
    </Container>
  )
}

export default App
