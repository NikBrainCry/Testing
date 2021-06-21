import { Route, Switch } from "react-router";
import Form from "./Form";
import App from "./App";
import Cats from "./Cats";
import CatsWithHooks from "./CatsWithHooks";
import Country from "./Country";
import { BrowserRouter, Redirect } from "react-router-dom";
import  OldTwitter  from "./twitter/OldTwitter";
const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/form" component={Form} />
        <Route path="/cats" exact component={Cats} />
        <Route path="/catsh" exact component={CatsWithHooks} />
        <Route path="/countries" component={Country} />
        <Route path="/twitter" component={OldTwitter} />
        <Route path="/" exact component={App} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};
export default RouteComponent;
