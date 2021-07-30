import "./App.css";
import { Navbar } from "./Layout/Navbar";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Footer } from "./Layout/Footer";
import { ContactMe } from "./Components/ContactMe";
import { Videos } from "./Components/Videos";

function App() {
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Tangerine"
  ></link>;
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/ContactMe" component={ContactMe}></Route>
        <Route exact path="/Videos" component={Videos}></Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
