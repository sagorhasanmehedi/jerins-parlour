import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Admin from "./Pages/Admin/Admin/Admin";
import Authprovider from "./Pages/Context/Authprovider";
import Detailpage from "./Pages/Detailpage/Detailpage";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Myorder from "./Pages/Myorder/Myorder/Myorder";
import Privateroute from "./Pages/Privateroute/Privateroute";
import Register from "./Pages/Register/Register";

function App() {
  return (
    <div className="App">
      <Authprovider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/myorder">
              <Myorder />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Privateroute path="/detailpage/:id">
              <Detailpage />
            </Privateroute>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </BrowserRouter>
      </Authprovider>
    </div>
  );
}

export default App;
