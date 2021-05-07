import { Switch, Route } from 'react-router-dom';

import HeaderComponent from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import StorePage from './pages/storepage/storepage.component';
import SectionPage from './pages/section-page/section-page.component';
import ProductPage from './pages/product-page/product-page.component';
import CartPage from './pages/cart-page/cart-page.component';

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/store" component={StorePage} />
        <Route exact path="/store/:section" component={SectionPage} />
        <Route exact path="/store/:section/product-:id" component={ProductPage} />
        <Route exact path="/cart" component={CartPage} />
      </Switch>
    </div>
  );
}

export default App;
