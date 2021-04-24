import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import { Container } from 'reactstrap';
import { render } from 'react-dom';
import SalePage from './components/SalePage';
import Profile from './components/Profile';
import Cart from './components/Cart';
import MensPage from './components/MensPage';
import WomesPage from './components/WomesPage';
import About from './components/About';
import HomePage from './components/HomePage';

const App = () => {
  return (
    <BrowserRouter>
      <Container className="body mx-auto">
        

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/womens" component={WomesPage} />
          <Route path="/mens" component={MensPage} />
          <Route path="/sale" component={SalePage} />
          <Route path="/about" component={About} />
          <Route path="/profile" component={Profile} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

const appDiv = document.getElementById('root');
render(<App />, appDiv);

