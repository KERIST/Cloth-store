import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import loadable from '@loadable/component';

import { updateAccessTokenHeader } from './api/auth';
import { selectUser } from './redux/user/user.selectors';
import { fetchItemsStart } from './redux/sections/sections.actions';

import 'semantic-ui-css/semantic.min.css'

import HeaderComponent from './components/header/header.component';
const HomePage = loadable(() => import('./pages/homepage/homepage.component'));
const StorePage = loadable(() => import('./pages/storepage/storepage.component'));
const SectionPage = loadable(() => import('./pages/section-page/section-page.component'));
const ProductPage = loadable(() => import('./pages/product-page/product-page.component'));
const CartPage = loadable(() => import('./pages/cart-page/cart-page.component'));
const SignInPage = loadable(() => import('./pages/signin-page/signin-page.component'));
const SignUpPage = loadable(() => import('./pages/signup-page/signup-page.component'));
const Page404 = loadable(() => import('./pages/page-404/page404.component'));

function App({ fetchItemsStart, user }) {
  fetchItemsStart();

  useEffect(function() {
    updateAccessTokenHeader(user);
  }, []);

  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/store/:section" component={SectionPage} />
        <Route exact path="/store/:section/product-:id" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/sign-up" component={SignUpPage} />
        <Route exact path="/404" component={Page404} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

const mapDispatchToProps = dispatch => ({
  fetchItemsStart: () => {dispatch(fetchItemsStart())}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
