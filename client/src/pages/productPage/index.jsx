import React, { Component } from "react";
import {
  AddToCart,
  Brand,
  Color,
  Colors,
  Container,
  Desc,
  Details,
  FilterColor,
  Price,
  Size,
  Sizes,
  Title,
} from "./styles";
import ImageGallery from "../../components/imagegallery";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
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

  colorSelect(attributeNameIndex, index) {
    if (this.state.selectedColor === index) {
      this.setState({ [attributeNameIndex]: index });

      return true;
    } else {
      return false;
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
    // console.log(this.state.amount);
    const { product, currency } = this.props;
    const swatch = product?.attributes?.filter((i) => i.type === "swatch");
    // console.log(currency);
    const price = product?.prices.filter((item) => {
      // console.log(item)
      return item?.currency?.label === currency?.currency;
    });

    // console.log(product);
    // console.log(this.state.selectedColor);
    return (
      <Container>
        <ImageGallery images={product?.gallery} />
        <Details>
          <Brand>{product?.brand}</Brand>
          <Title>{product?.name}</Title>

          {product?.attributes.map((attr, index) => {
            let attrNameIndex = attr.name;
            let temp = attrNameIndex;

            if (attr?.type !== "swatch") {
              return (
                <Sizes key={`swatch_ ${index}`}>
                  <div key={`${index}_${attr.name}`} className="title">
                    {attr.name} :
                  </div>
                  <div key={`itemContainer_${index}`} className="size__list">
                    {attr.items.map((item, index) => {
                      return (
                        <Size
                          key={`${index}_attribute${item} `}
                          selected={
                            this.state[attrNameIndex] === index
                              ? true
                              : false
                          }
                          onClick={() => {
                            this.setState({ [attrNameIndex]: index });
                            
                          }}
                        >
                          <p key={`${index}_item value${item.value}`}>
                            {item.value}
                          </p>
                        </Size>
                      );
                    })}
                  </div>
                </Sizes>
              );
            }
          })}
          {swatch && (
            <Colors>
              <div>{swatch[0]?.name} :</div>
              <div className="color__container">
                {swatch[0]?.items.map((item, index) => {
                  return (
                    <FilterColor
                      key={`index color ${index}`}
                      color={item.value}
                      selected={this.state.selectedColor === item.id}
                      onClick={() => {
                        this.setState({ selectedColor: item.id });
                        
                      }}
                    />
                  );
                })}
              </div>
            </Colors>
          )}

          {/* {product?.color ? (
            <Colors>
              <h5 className="title">COLOR:</h5>
              <div className="color__list">
                <Color color={"#4242"} />
              </div>
            </Colors>
          ) : null} */}

          {price && (
            <Price>
              <h5 className="title">PRICE:</h5>

              <p>
                {price[0]?.currency?.symbol}
                {price[0]?.amount}
              </p>
            </Price>
          )}

          <AddToCart onClick={() => this.addToCart(product)}>
            ADD TO CART
          </AddToCart>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            voluptatem exercitationem esse explicabo similique illo magni iure
            placeat ipsum excepturi.
          </Desc>
        </Details>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.product.product,
  currency: state.currency,
  cartProducts: state.cart.products,
});

const mapDispatchToProps = {
  GetProduct,
  addProductToCart,
  changeProductQuantity,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
