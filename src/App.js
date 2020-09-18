import React, { Component } from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage';
import { Switch, Route, Redirect } from 'react-router-dom';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async authUser => {
      if (authUser) {
        const userRef = await createUserProfileDocument(authUser);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            ...snapShot.data()
          });
        })
      } else {
        setCurrentUser(authUser)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/"/>) : (<SignInSignUp/>)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
