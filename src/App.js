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
import AddListingView from "./views/AddListing";
import Settings from "./views/Settings";
import Landing1 from "./views/Landing1";

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
      <img src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/880/638/datas/medium.png" />
      <Viewport>
        <>
          <Router>
            <Switch>
              <Route exact path="/landing-1">
                <Landing1 />
              </Route>
              <Route exact path="/landing-2">
                <Landing1 />
              </Route>
              <Route exact path="/landing-3">
                <Landing1 />
              </Route>
              <Route exact path="/landing-4">
                <Landing1 />
              </Route>
            </Switch>
            <Switch>
              <Route exact path="/settings">
                <Settings />
              </Route>
              <Route exact path="/add">
                <AddListingView />
              </Route>
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
