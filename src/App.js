import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";

import Viewport from "./components/Viewport";
import Map from "./views/Map";
import Navigation from "./components/Navigation";
import "mapbox-gl/dist/mapbox-gl.css";
import AddListingView from "./views/AddListing";
import Settings from "./views/Settings";

import Signup from "./views/Signup";
import Login from "./views/Login";
import Slidingcard from "./components/slidingcard";
import useAuth from "./hooks/useAuth";
import Landing from "./views/Landing";

import { firebase } from "./firebase";

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuth(firebase.auth);
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
  const { isAuthenticated } = useAuth(firebase.auth);
  return (
    <Route
      {...props}
      render={(routeProps) =>
        !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/home" />
      }
    />
  );
};

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <Viewport>
        <>
          <Router>
            <Switch>
              <UnauthenticatedRoute exact path="/signup">
                <Signup {...props} firebase={firebase} />
              </UnauthenticatedRoute>
              <UnauthenticatedRoute exact path="/login">
                <Login {...props} />
              </UnauthenticatedRoute>

              <AuthenticatedRoute exact path="/settings">
                <Settings />
                <Navigation />
              </AuthenticatedRoute>
              <AuthenticatedRoute exact path="/add">
                <AddListingView />
                <Navigation />
              </AuthenticatedRoute>
              <AuthenticatedRoute exact path="/home">
                <Map />
                <Slidingcard />
                <Navigation />
              </AuthenticatedRoute>
              <UnauthenticatedRoute exact path="/">
                <Landing {...props} />
              </UnauthenticatedRoute>
            </Switch>
          </Router>
        </>
      </Viewport>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  map: state.map,
});
export default connect(mapStateToProps, null)(App);
