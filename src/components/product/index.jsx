import { Component } from "react";
import { connect } from "react-redux";
import { BsCart2 } from "react-icons/bs";
import { Container, Details, Image, Price, Title } from "./styles";
import { useParams } from "react-router-dom";
import { GetProduct } from "../../features/product/productSlice";
import {
  addProductToCart,
  changeProductQuantity,
} from "../../features/cart/cartSlice";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

class Index extends Component {
   state = {
    product: [],
    loading: false,
    error: null,
    currency: this.props.currency?.currency,
    prices: [],
    amount: null,
    attributes: [],
    toggleImage: 0,
    selectedColor: 0,
  };

  componentDidMount() {
    this.props.GetProduct(this.props.params.id);
    setTimeout(() => {
        this.setState({
      product: this.props.product,
      gallery: this.props.product?.gallery,
      attributes: this.props.product?.attributes,
      loading: false,
    });
    }, 1000);
  }

  componentDidUpdate(state, props) {
      // console.log(state)
      // console.log(props);
      if (state.params.id !== this.props.params.id) {
        this.props.GetProduct(this.props.params.id);
      }
    }

    addToCart(product) {
    console.log(this.state);
    const keysState = Object.entries(this.state);
    const attributeNames = this.state.attributes.map((obj) => {
      return obj.name;
    });

    console.log(attributeNames)
    const selectedAttributes = [];
    for (let i = 0; i < attributeNames.length; i++) {
      for (let j = 0; j < keysState.length; j++) {
        if (attributeNames[i] === keysState[j][0]) {
          const temp = this.state[attributeNames[i]];
          selectedAttributes.push([attributeNames[i], temp]);
        }
      }
    }

console.log(product)
// console.log(cart)


    // this.setState({ prices: this.props?.product?.prices });
    const unitPrice = this.props.product?.prices.filter(
      (item) => item.currency?.label === this.props.currency?.currency
    );

    // console.log(price);

    const productData = {
      ...product,
      selectedAttributes,
      unitPrice,
      total: unitPrice[0]?.amount,
      selectedColor: this.state.selectedColor,
      qty: 1,
    };
    this.props.addProductToCart({ productData });
  }

  render() {
    const { product, currency } = this.props;
    const swatch = product?.attributes?.filter((i) => i.type === "swatch");
    // console.log(currency);
    const price = product?.prices.filter((item) => {
      // console.log(item)
      return item?.currency?.label === currency?.currency;
    });
    
    return (
      <Container>
        <Image>
          <img src={product?.gallery[0]} alt="" />
        </Image>
        <Details>
          <div className="cart__btn">
            <BsCart2 onClick={() => this.addToCart(product)} />
          </div>
          <Title to={`/product/${product?.id}`}> {product?.name}</Title>
          <Price>
            {`${product?.prices[0]?.currency?.symbol}
            ${product?.prices[0]?.amount}`}
          </Price>
        </Details>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  // product: state.product.product,
  currency: state.currency,
  cartProducts: state.cart.products,
});

const mapDispatchToProps = {
  GetProduct,
  addProductToCart,
  changeProductQuantity,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
