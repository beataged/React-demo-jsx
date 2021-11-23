import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import About from './components/About';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/" element={<About />} />

          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
