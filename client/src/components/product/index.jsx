import { Component } from "react";
import { BsCart2 } from "react-icons/bs";
import { Container, Details, Image, Price, Title } from "./styles";
import { useParams } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

class Index extends Component {
  render() {
    const { product } = this.props;
    // console.log(product)
    return (
      <Container>
        <Image>
          <img src={product?.gallery[0]} alt="" />
        </Image>
        <Details>
          <div className="cart__btn">
            <BsCart2 />
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

export default withRouter(Index);
