import "./App.css";
import Home from "./components/Home";
import { Route, Link, Switch } from "react-router-dom";
import Movies from "./components/Movies";
import MovieDetail from "./components/MovieDetail";
import NewMovie from "./components/NewMovie"

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>

      <p>Hey </p>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Movies" component={Movies} />
        <Route exact path="/movies/:movieId" component={MovieDetail} />
        <Route exact path="/AddMovie" component={NewMovie} />
      </Switch>
    </div>
  );
}

export default App;
