 import Home  from "./Pages/Home";
// import Login from "./Pages/Login"
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route  path="/" >
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;