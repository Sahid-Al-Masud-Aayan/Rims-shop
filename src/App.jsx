import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayoutOne from './Layout/LayoutOne'
import Home from './Pages/Home'
import Users from './Pages/Users'
import Products from './Pages/Products'
import Help from './Pages/Help'
import Data from './Pages/Data'
import Buy from './Pages/Buy'
import Confirm from './Pages/Confirm'

function App() {
const mainRouter= createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
      <Route index element={<Home/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/help' element={<Help/>}/>
      <Route path='/data' element={<Data/>}/>
      <Route path='/buy' element={<Buy/>}/>
      <Route path='/done' element={<Confirm/>}/>
      </Route>
    </Route>
    
  )
)

  return (
    <>
    <RouterProvider router={mainRouter}/>
    </>
  )
}

export default App
