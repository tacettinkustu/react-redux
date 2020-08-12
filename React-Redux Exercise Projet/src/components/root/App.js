import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import CartDetail from "../cart/CartDetail";
import Dashboard from "./Dashboard";
import { Switch, Route } from "react-router-dom";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct"
import NotFound from "../common/NotFound";

function App() {
  return (
    <div>
      <Container>
        <Navi></Navi>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" exact component={Dashboard} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route path="/saveproduct" component={AddOrUpdateProduct} />
          <Route path="/cart" exact component={CartDetail} />
          <Route  component={NotFound} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
