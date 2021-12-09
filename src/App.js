import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss';
import Home from './Pages/Home/Home/Home';
import Login from "./Pages/Login/Login";
import Navbar from "./Pages/Shared/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
       <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
