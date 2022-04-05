
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
import Dash from './components/Dash/Dash';
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <div>
      <Header></Header>


      <Routes>





        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/dash' element={<Dash></Dash>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>

        <Route path='/dashboard' element={<Dashboard ></Dashboard>}></Route>

        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>


      <div>

        {/* <Footer></Footer> */}
      </div>



    </div>



  );
}

export default App;
