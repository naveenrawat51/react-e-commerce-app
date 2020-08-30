import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signup-signin/Signup-signin';

const HatsPage = (props) => {
  return (
  <div>
    <h1>Hats Page</h1>
  </div>
)
  }
function App() {
  return (
    <div>
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path="/signin" component={SignInSignUp}/>
      </Switch>
    </div>
  );
}

export default App;
