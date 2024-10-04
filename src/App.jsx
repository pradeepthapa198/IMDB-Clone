 import './App.css'
 import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home'
import Show from './Pages/Show'

function App() {
   

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<Show/>}/>
      </Routes>
      
      </BrowserRouter> 
    </>
  )
}

export default App
