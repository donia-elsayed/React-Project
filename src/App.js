import NavBar from './navbar/navbar.jsx';
import Home from './home/home.jsx';
import Shop from './shop/shop.jsx';
import Product from './product/product.jsx';
import Counter from './counter/counter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App mt-5 container">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/shop" component={Shop} exact/>
          <Route path="/counter" component={Counter} />
          <Route path="/shop/:id" component={Product}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
