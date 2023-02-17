import './App.css';
import Home from './Home'
import Donar from './Donar';
import {Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';
import NeedFood from './NeedFood';
import Volunteer from './Volunteer';
import Register from './Register';
import Login from './Login';
import SuccessStories from './SuccessStories';


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Donar' element={<Donar />}/>
      <Route path='/NeedFood' element={<NeedFood />} />
      <Route path='/SuccessStories' element={<SuccessStories />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Volunteer' element={<Volunteer />} />
    </Routes>        
    </>
  );
}

export default App;
