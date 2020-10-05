import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path ="/" component={Index} />
      <Route exact path ="/contact" component={Contact} />
      <Route exact path ="/portfolio" component={Portfolio} />
      <Footer />
    </Router>
  );
}

export default App;
