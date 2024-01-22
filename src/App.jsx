import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Pages/Login';
import Chat from './Pages/Chat-area';
import SideMenu from './Pages/SideMenu';


function App() {
  const location = useLocation();
  return (
    <Routes key={location.pathname} location={location} >
      <Route index element={<Login />} />
      <Route path='/Login' element={<Login />} />
      <Route path="/Chat" element={<Chat />} />
      <Route path='/SideMenu' element={<SideMenu />} />
    </Routes>
  )
}

export default App;