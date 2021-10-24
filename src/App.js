import NavBar from './shared/navbar/navbar.jsx';
import Home from './component/home/home.jsx';
import Shop from './component/shop/shop.jsx';
import Product from './component/product/product.jsx';
import Counter from './component/counter/counter.jsx';
import Todo from './component/todo/Todo.jsx';
import Login from './component/login/login.jsx';
import Register from './component/register/register.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/shop" component={Shop} exact/>
          <Route path="/counter" component={Counter} />
          <Route path="/shop/:id" component={Product} />
          <Route path="/todo" component={Todo} />
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
