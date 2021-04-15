import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";

class ProductList extends Component {
  componentDidMount() {
      this.props.actions.getProducts()
  }
  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>{" "}
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <p>{this.props.products}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.getProductReducers,
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
