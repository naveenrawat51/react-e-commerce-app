import React, { Component, lazy, Suspense } from "react";
import { GlobalStyle } from "./global.styles";
import Homepage from "./pages/homepage/Homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import SignInSignUp from "./pages/signup-signin/Signup-signin";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { checkUserSession } from "./redux/user/user.actions";

const ShopPageLazyLoad = lazy( () => import('./pages/shop/Shop'));
const CheckoutPageLazyLoad = lazy( () => import('./pages/checkout/checkout'));
class App extends Component {

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }


  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Suspense fallback={<div>Loading....</div>}>
          <Route path="/shop" component={ShopPageLazyLoad} />
          <Route exact path="/checkout" component={CheckoutPageLazyLoad} />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
