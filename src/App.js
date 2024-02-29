import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Nopage from './pages/nopage/Nopage';
import MyState from './context/myState';
import Login from './pages/registrantion/Login';
import Signup from './pages/registrantion/Signup';
import Productinfo from './pages/productinfo/Productinfo';
import Dashboard from './pages/admin/dashboard/Dashboard';
import Addproduct from './pages/admin/pages/Addproduct';
import Updateproduct from './pages/admin/pages/Updateproduct';
function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <Protectedrouteforuser>
              <Order />
            </Protectedrouteforuser>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <Protectedrouteforadmin>
              <Dashboard />
            </Protectedrouteforadmin>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path="/*" element={<Nopage />} />
          <Route path='/productinfo/:id' element={<Productinfo />} />
          <Route path="/addproduct" element={
            <Protectedrouteforadmin>
              <Addproduct />
            </Protectedrouteforadmin>
          } />
          <Route path="/updateproduct" element={
            <Protectedrouteforadmin>
              <Updateproduct />
            </Protectedrouteforadmin>
          } />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App

export const Protectedrouteforuser = ({ children }) => {
  
  if (localStorage.getItem('user')) {
    return children;
  }
  else {
    return <Navigate to={'/login'} />
  }
}


export const Protectedrouteforadmin = ({ children }) => {

  const admin=JSON.parse(localStorage.getItem('user'));
  if(admin.user.email==='xyz@gmail.com'){
    return children;
  }
  else{
    return <Navigate to={'/login'}/>
  }
}
