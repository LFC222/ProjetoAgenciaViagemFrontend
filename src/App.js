import React from "react";

import Home from "./Home";
import Destinos from "./Destinos";
import Contatos from "./Contatos";
import Promocao from "./Promocao";


import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {



    return(

      <Router>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">DreamTour</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#"><Link to="/">Home</Link> <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#"><Link to="/destinos">Destinos</Link></a>
      <a class="nav-item nav-link" href="#"><Link to="/promocao">Promoção</Link></a>
      <a class="nav-item nav-link " href="#"><Link to="/contatos">Contatos</Link></a>
    </div>
  </div>
</nav>
                    <Routes>
                        <Route path='/'  element={<Home/>}></Route>
                        <Route path='/destinos'  element={<Destinos/>}></Route>
                        <Route path='/promocao'  element={<Promocao/>}></Route>
                        <Route path='/contatos'  element={<Contatos/>}></Route>
                    </Routes>
      </Router>
    );
  }
      
export default App;