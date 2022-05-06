import Product from "./Pages/Product";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Cart from "./Pages/Cart";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Success from "./Pages/Success";

const App = () => {
  const user = true;
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user? <Redirect to="/"/> : <Login/>}  {/*if there is a user we redirect to home page if not login*/}
        </Route>
        <Route path="/register">
        {user? <Redirect to="/"/> : <Register/>}  {/*if there is a user we redirect to home page, if not register */}
        </Route>
        
      </Switch>
    </Router>
  );
};

export default App;