import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Col, Row } from "reactstrap";
import { Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts(this.props.currentCategory.id);
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
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
