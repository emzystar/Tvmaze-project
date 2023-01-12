import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import Navhead from './Components/Navhead'
import Home from './pages/Home'
import Search from './pages/Search';
import Footer from './Components/Footer'



function App() {
  return (
    <>
    <Navhead/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Search" element={<Search/>} />

    </Routes>
    <Footer/>
      
    </>
  );
}

export default App;
 