 import Home  from "./Pages/Home";
// import Login from "./Pages/Login"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import ProductList from "./Pages/ProductList";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" >
          <Home/>
        </Route>
        <Route  path="/products" >
         <ProductList/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;