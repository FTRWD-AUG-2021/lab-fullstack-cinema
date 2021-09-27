import "./App.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <p>Hey </p>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Movies" component={Movies} />
      </Switch>
    </div>
  );
}

export default App;
