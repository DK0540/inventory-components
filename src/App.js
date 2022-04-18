import './App.css';
import React  from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Product from './components/Product/product';



function App() {
  return (
    <Router>
    <div className="App">
     
    <Routes>
          <Route exact path='/' element={< Homepage />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/register' element={< Register />}></Route>
          <Route exact path='/Product' element={< Product />}></Route>
   </Routes>
   </div>
</Router>
  );
}

export default App;
