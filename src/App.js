
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import Dashboard from './components/Dashboard/Dashboard';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>


      <Routes>
        <Route path='/' element={<home></home>}></Route>


        <Route path='/home' element={<Home></Home>}></Route>
        {/* <Route path='/' element={<Shop></Shop>}></Route> */}
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/dashboard' element={<Dashboard ></Dashboard>}></Route>
        {/* <Route path='/orders' element={<Orders></Orders>}></Route> */}
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>

      </Routes>


      <div>

        <Footer></Footer>
      </div>



    </div>



  );
}

export default App;
