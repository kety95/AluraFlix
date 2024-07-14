import './App.css'
import Menu from './components/Menu/Menu'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './paginas/Home/Home';
import NovoVideo from './paginas/NovoVideo/NovoVideo';
import Rodape from './components/Rodape';

function App() {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='novovideo' element={<NovoVideo/>}/>
      </Routes>
      <Rodape/>
    </BrowserRouter>
  )
}

export default App
