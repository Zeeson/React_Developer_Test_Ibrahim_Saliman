import React, { Component } from "react";
import { Container, ProductList, Title } from "./styles";
import { useParams } from "react-router-dom";
import Product from "../../components/product";
import { connect } from "react-redux";
import { GetCategory } from "../../features/category/categorySlice";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};

class Index extends Component {
 

  componentDidMount() {
    this.props.GetCategory(this.props.params.category);
  
  }

  componentDidUpdate(state, props) {
    // console.log(state)
    // console.log(props);
    if (state.params.category !== this.props.params.category) {
      this.props.GetCategory(this.props.params.category);
    }
  }

  render() {
    const { category, products } = this.props;
    // console.log(category);

    return (
      <Container>
        <Title>{category?.name?.toUpperCase()}</Title>

        <ProductList>
          {products?.map(item => (
             <Product product={item} key={item.id} /> 
          ))}
        </ProductList>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  category: state.categories.category,
  products: state.categories.category.products
});

const mapDispatchToProps = { GetCategory };

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
