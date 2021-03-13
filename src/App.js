import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import BaseHeader from "./shared/BaseHeaderComponent";
import BaseFooter from "./shared/BaseFooterComponent";
import Home from "./components/HomeComponent";
import OurTeam from "./components/OurTeamComponent";
import ContactUs from "./components/ContactUsComponent";
import Blog from "./components/BlogComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-social/bootstrap-social.css";
import "typeface-orbitron";
import "./css/App.css";
import "./css/Header.css";
import "./css/Footer.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <BaseHeader />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/ourteam" component={OurTeam} />
          <Route path="/contactus" component={ContactUs} />
          <Route path="/blog" component={Blog} />
          <Redirect to="/home" />
        </Switch>
        <BaseFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
