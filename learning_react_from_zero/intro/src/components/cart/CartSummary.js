import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import {bindActionCreators} from "redux"
import * as cartActions from "../../redux/actions/cartActions"
import { Link } from "react-router-dom";
import alertify from "alertifyjs";

class CartSummary extends Component {
  emptyCart() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav>
          Empty Cart
        </DropdownToggle>
      </UncontrolledDropdown>
    );
  }
  removeItem(item){
    this.props.actions.removeItem(item);
    alertify.error(`${item.product.productName} deleted from cart`)
  }

  renderCart() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          My Cart
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((item) => (
            <DropdownItem>
              <Badge color="danger" onClick={()=>this.removeItem(item)}>X</Badge>
              {" "}{item.product.productName}{" "}
              <Badge color="success">{item.quantity}</Badge>
            </DropdownItem>
          ))}

          <DropdownItem divider />
          <DropdownItem><Link to="/cart">Go to cart</Link></DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderCart() : this.emptyCart()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeItem: bindActionCreators(cartActions.removeFromCart, dispatch),
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(CartSummary);
