
import './App.css';
import MainContent from './maincontent';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Electronics from './electronics'
import Jewelery from './jewelery'
import Men from './men'
import Women from './women'
import Cart from './cart.js';
import MyAccount from './myaccount'
import Login from './login.js'
import NewUser from './newaccount';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/" element={<MainContent />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/clothingformen" element={<Men />} />
          <Route path="/clothingforwomen" element={<Women />} />
          <Route path="/mycart" element={<Cart />} />
          </Routes>
      </Router>
  );
}

export default App;
