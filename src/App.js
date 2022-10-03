
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Services from './Pages/Home/Services/Services';
import DetailsPage from './Pages/Home/DetailsPage/DetailsPage';
import Service from './Pages/Home/Service/Service';
import Experts from './Pages/Home/Experts/Experts';
import Login from './Pages/Home/Login/Login';
import NotFound from './Pages/Home/NotFound/NotFound';
import Register from './Pages/Home/Register/Register';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/experts' element={<Experts></Experts>}></Route>
        <Route path='/service' element={<Service></Service>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/service/:serviceId' element={<DetailsPage></DetailsPage>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
