import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button, Col, Row } from "reactstrap";
import { Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs"


class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.currentCategory.id);
  }

  addCart = (product)=>{
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.productName+" added the cart")
  }
  

  render() {
    return (
      <div>
        <Col>
          <Row>
            <h3>
              <Badge color="warning">Products</Badge>{" "}
              <Badge color="success">
                {this.props.currentCategory.categoryName}
              </Badge>
            </h3>
          </Row>
          <Row>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>In Stock</th>
                  <th></th>
                </tr>
              </thead>

              {this.props.products.map((item) => (
                <tbody>
                  <tr>
                    <th>{item.id}</th>
                    <td>{item.productName}</td>
                    <td>{item.quantityPerUnit}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitsInStock}</td>
                    <td>
                      <Button color="success" onClick={()=>this.addCart(item)}>Add to Cart</Button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </Row>
        </Col>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.getProductReducers,
    currentCategory: state.changeCategoryReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
