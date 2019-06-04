import React from 'react';
import Home from './Pages/Home'
import Rooms from './Pages/Rooms'
import SingleRoom from './Pages/SingleRoom'
import Error from './Pages/Error'
import {Route,Switch, Link } from "react-router-dom";
import Navbar from './components/Navbar'

//import './App.css';

function App() {
  return (
    <>
    <Navbar></Navbar>
    hello from app
    <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/rooms" component={Rooms} />
   <Route exact path="/rooms/:slug" component={SingleRoom} />
   <Route component={Error} />
   </Switch>
    </>
  );
}

export default App;
