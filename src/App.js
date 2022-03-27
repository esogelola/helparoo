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
import Signup from "./views/Signup";
import Login from "./views/Login";
import Slidingcard from "./components/slidingcard";
import useAuth from "./hooks/useAuth";
import Landing from "./views/Landing";

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    return <Route {...props} render={(routeProps) => <C {...routeProps} />} />;
  } else {
    return <Redirect to={"/login"} />;
  }
};

const UnauthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Route {...props} render={(routeProps) => <C {...routeProps} />} />;
  } else {
    return <Redirect to={"/login"} />;
  }
};

function App() {
  return (
    <div className="App">
      <Viewport>
        <>
          <Router>
            <Switch>
              
              <UnauthenticatedRoute exact path="/">
                <Landing />
              </UnauthenticatedRoute>
              <UnauthenticatedRoute exact path="/signup">
                <Signup />
              </UnauthenticatedRoute>
              <UnauthenticatedRoute exact path="/login">
                <Login />
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
            </Switch>
          </Router>
        </>
      </Viewport>
    </div>
  );
}

export default App;
