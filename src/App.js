import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Homecontainer from "./containers/HomeContainer";
import CustomerContainer from "./containers/CustomerContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          activeClassName="active_class"
          path="/"
          component={LoginContainer}
        ></Route>
        <Route exact path="/login" activeClassName="active_class">
          <LoginContainer />
        </Route>
        <Route
          exact
          path="/login"
          activeClassName="active_class"
          component={LoginContainer}
        />

        <Route exact path="/home">
          <Homecontainer />
        </Route>
        <Route exact path="/customer-management">
          <CustomerContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
