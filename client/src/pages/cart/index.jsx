import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../../components/cartItem";
import { Container, List, Title } from "./styles";



class Index extends Component {
  render() {
    const { cart } = this.props;
    // console.log(cart);
    return (
      <Container>
        <Title>Cart</Title>
        <hr />
        <List>
          {cart?.products.map((item) => (
            <div key={item?.id}>
              <CartItem product={item} />
              <hr />
            </div>
          ))}
        </List>
        <div className="order-description">
          <div className="order-column-1">
            <p className="order-text">Tax 21%:</p>
            <p className="order-text">Quantity:</p>
            <p className="order-text">Total:</p>
          </div>
          <div className="order-column-2">
            <p className="order-quantity">
              {this.props.currency.currency}
              {Math.round(cart?.total * 0.21)}
            </p>
            <p className="order-quantity">{cart?.qty}</p>
            <p className="order-quantity">
              {this.props.currency.currency}
              {cart?.total.toFixed(2)}
            </p>
          </div>
        </div>
        <button type="submit" className="order-btn">
          <p> order</p>
        </button>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency
});

export default connect(mapStateToProps)(Index);
