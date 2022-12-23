import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./cartItem";
import { Container, List, Title } from "./styles";
import { showCart } from "../../features/cart/cartSlice";

class Index extends Component {
  render() {
    const { cart, currency } = this.props;
    // console.log(cart);
    return (
      <Container>
        <Title>My Bag, {cart?.qty} items</Title>
        <hr />
        <List>
          {cart?.products.map((item) => (
            <div key={item?.id}>
              <CartItem product={item} />
              <hr />
            </div>
          ))}
        </List>
        <div className="total-block">
          <div className="text-left">Total:</div>
          <div className="text-right">
            {currency && currency?.currencies.map((item) => {
              if (item.label === currency?.currency) {
                return <span>{item.symbol}</span>;
              }
            })}
           
            {cart?.total.toFixed(2)}
          </div>
        </div>
        <div onClick={() => this.props.showCart()} className="minicart-buttons" >
          <Link to="/cart" className="link-view-bag" >
            <p >view bag</p>
          </Link>
          <button className="btn-checkout">check out</button>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency,
});

const mapDispatchToProps = { showCart };

export default connect(mapStateToProps, mapDispatchToProps)(Index);
