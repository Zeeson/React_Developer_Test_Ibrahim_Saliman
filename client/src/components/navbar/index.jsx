import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Cart,
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

class Index extends Component {
  selectCurrency = (currency) => {
    this.props.updateCurrency(currency);
    this.props.showCurrencyList();
  };

  componentDidMount() {
    this.props.GetCategories();
  }

  render() {
    const { categories, currency } = this.props;
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
          <img src={logo} alt="" />
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
              {currency?.currencies.map((item) => (
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
            <BsCart2 />
          </Cart>
        </MenuRight>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  currency: state.currency,
  // currencyOpen:
});

const mapDispatchToProps = { GetCategories, showCurrencyList, updateCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(Index);
