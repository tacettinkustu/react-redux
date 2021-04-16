import React from "react";
import { Route, Switch } from "react-router";
import { Container } from "reactstrap";
import CartDetails from "../cart/CartDetails";
import Navi from "../navi/Navi";
import DashBoard from "./DashBoard";

function App() {
  return (
    <Container>
      <Navi></Navi>
      <Switch>
        <Route exact path="/" component={DashBoard}></Route>
        <Route exact path="/products" component={DashBoard}></Route>
        <Route exact path="/cart" component={CartDetails}></Route>
      </Switch>
    </Container>
  );
}

export default App;
