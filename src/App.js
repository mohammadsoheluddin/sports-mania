import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/league/:id">
            <LeagueDetail></LeagueDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

