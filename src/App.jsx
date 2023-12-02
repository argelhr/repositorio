import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import GlobalStyle from './components/Global';
import Home from './pages/Home';
import About from './pages/About';
import Projetos from './pages/Projetos';
import Slide from './components/Slide';
import Ghost from './components/Ghost';
import Neon from './components/Neon';

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Header />
       
          <Routes>
            <Route path="/" element={
              <Slide>
                <Home />
              </Slide>
            } />
            <Route path="/about" element={
              <Ghost>
                <About />
              </Ghost>
            } />
            <Route path="/projetos" element={
              <Neon>
                <Projetos />
              </Neon>
            } />

          </Routes>

      </Router >
    </>
  );
}


export default App;
