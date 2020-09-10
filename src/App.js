import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route } from 'react-router-dom';
import ShopPage from './pages/shop/Shop';
import Header from './components/header/Header';
import SignInSignUp from './pages/signup-signin/Signup-signin';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from '../src/redux/user/user.actions';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log('nkz 001');
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async authUser =>  {
      if(authUser) {
        console.log('nkz 002');
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            ...snapShot.data()
           });
        })
      } else {
        setCurrentUser(authUser)
        console.log('nkz 003');
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
