import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Cart,
  CartModal,
  Container,
  CurrencyList,
  CurrencySwitcher,
  Logo,
  MenuLeft,
  MenuRight,
} from "./styles";
import logo from "../../assets/VSF.png";
import { BsCart2 } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { connect } from "react-redux";
import { GetCategories } from "../../features/category/categorySlice";
import {
  showCurrencyList,
  updateCurrency,
} from "../../features/currency/currencySlice";
import { showCart } from "../../features/cart/cartSlice";
import MiniCart from '../miniCart'


class Index extends Component {
  selectCurrency = (currency) => {
    this.props.updateCurrency(currency);
    this.props.showCurrencyList();
  };

  componentDidMount() {
    this.props.GetCategories();
  }

  render() {
    const { categories, currency, cart } = this.props;
    // console.log(currency);

    return (
      <Container>
        <MenuLeft>
          {categories?.categories?.map((item) => (
            <NavLink
              to={`category/${item.name}`}
              key={item.name}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {item.name.toUpperCase()}
            </NavLink>
          ))}
        </MenuLeft>
        <Logo to="/">
          <img src={logo} alt="logo" />
        </Logo>
        <MenuRight>
          <CurrencySwitcher>
            <span onClick={() => this.props.showCurrencyList()}>
              ${" "}
              <small>
                {" "}
                {currency?.currencyOpen ? (
                  <MdKeyboardArrowUp />
                ) : (
                  <MdKeyboardArrowDown />
                )}
              </small>
            </span>
            <CurrencyList open={currency?.currencyOpen}>
              {currency &&
                currency?.currencies?.map((item) => (
                  <div
                    key={item?.symbol}
                    onClick={() => this.selectCurrency(item?.label)}
                  >
                    <span>
                      {item.symbol} {item?.label}
                    </span>
                  </div>
                ))}
            </CurrencyList>
          </CurrencySwitcher>
          <Cart>
            <div className="count">{cart?.qty}</div>
            <BsCart2 onClick={() => this.props.showCart()} />
            <CartModal open={cart?.openCart}>
              <MiniCart/>
            </CartModal>
          </Cart>
        </MenuRight>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  currency: state.currency,
  cart: state.cart
});

const mapDispatchToProps = { GetCategories, showCurrencyList, updateCurrency, showCart };

export default connect(mapStateToProps, mapDispatchToProps)(Index);
