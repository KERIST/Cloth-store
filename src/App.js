import { Switch, Route } from 'react-router-dom';

import HeaderComponent from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';

import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
