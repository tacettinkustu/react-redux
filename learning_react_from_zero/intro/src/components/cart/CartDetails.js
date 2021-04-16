import { Button } from "reactstrap";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class CartDetails extends Component {
    removeFromCart(item){
        this.props.actions.removeItem(item);
        alertify.error(`${item.product.productName} deleted from cart`)
    }
  render() {
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>

          {this.props.cart.map((cartItem) => (
            <tbody>
              <tr>
                <th>{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.quantityPerUnit}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={() => this.removeFromCart(cartItem)}>
                    Delete
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
