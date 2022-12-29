import React, { Component } from "react";
import {
  Attributes,
  Container,
  Details,
  Title,
  Size,
  Sizes,
  FilterColor,
  Colors,
} from "./styles";
import ImageSlider from "./imageSlide";
import { connect } from "react-redux";
import {
  changeProductQuantity,
  decreaseProductQuantity,
} from "../../../features/cart/cartSlice";

class Index extends Component {
  render() {
    const { product } = this.props;
    const swatch = product?.attributes?.filter((i) => i.type === "swatch");

    return (
      <Container>
        <Details>
          <Title>
            <h3 className="brand">{product?.brand}</h3>
            <h3 className="title">{product?.name}</h3>
            <p className="price">{product.unitPrice[0].amount}</p>
          </Title>
          <Attributes>
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
                              this.props.product?.selectedAttribute
                                ? index ===
                                  this.props.product?.selectedAttributes[0][1]
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
                        selected={this.props.product.selectedColor === item.id}
                      />
                    );
                  })}
                </div>
              </Colors>
            )}
          </Attributes>
        </Details>

        <div className="qty">
          <button
            onClick={() =>
              this.props.dispatch(decreaseProductQuantity(product?.id))
            }
          >
            -
          </button>
          <span>{product?.qty}</span>
          <button
            onClick={() =>
              this.props.dispatch(changeProductQuantity(product?.id))
            }
          >
            +
          </button>
        </div>
        <ImageSlider images={product?.gallery} />
      </Container>
    );
  }
}

export default connect()(Index);