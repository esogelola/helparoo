import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Viewport from "./components/Viewport";
import Map from "./views/Map";
import Navigation from "./components/Navigation";
import "mapbox-gl/dist/mapbox-gl.css";

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = { isAuthenticated: false };
  console.log(`AuthenticatedRoute: ${isAuthenticated}`);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
      }
    />
  );
};

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = { isAuthenticated: false };
  console.log(`UnauthenticatedRoute: ${isAuthenticated}`);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
      }
    />
  );
};

function App() {
  return (
    <div className="App">
      <Viewport>
        <>
          <Router>
            <Switch>
              <Route path="/">
                <Map />
              </Route>
            </Switch>
            <Navigation />
          </Router>
        </>
      </Viewport>
    </div>
  );
}

export default App;
