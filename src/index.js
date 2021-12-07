import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Procedures from './components/Procedures';
import Contact from './components/Contact'
import Home from './components/Home';
import './styles.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
        <Route path='procedures' element={<Procedures/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='home' element={<Home/>}/>
        <Route
        index 
        element={
          <main style={{ padding: "1rem" }}><Home/></main>
        } />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
