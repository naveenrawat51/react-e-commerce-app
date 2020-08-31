import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signup-signin/Signup-signin';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async authUser =>  {
      if(authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot( snapShot => {
          this.setState({ currentUser: {
            ...snapShot.data()
           }});
        })
      } else {
        this.setState({ currentUser: authUser })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path="/signin" component={SignInSignUp}/>
      </Switch>
    </div>
  );
  }
}

export default App;
