import { Switch, Route } from 'react-router-dom';

import HeaderComponent from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import StorePage from './pages/storepage/storepage.component';
import SectionPage from './pages/section-page/section-page.component';
import ProductPage from './pages/product-page/product-page.component';
import CartPage from './pages/cart-page/cart-page.component';
import SignInPage from './pages/signin-page/signin-page.component';
import SignUpPage from './pages/signup-page/signup-page.component';
import Page404 from './pages/page-404/page404.component';

import { connect } from 'react-redux';
import { fetchItemsStart } from './redux/sections/sections.actions';

import 'semantic-ui-css/semantic.min.css'

function App({ fetchItemsStart }) {
  fetchItemsStart();

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

const mapDispatchToProps = dispatch => ({
  fetchItemsStart: () => {dispatch(fetchItemsStart())}
});

export default connect(null, mapDispatchToProps)(App);
