import React, { Component } from "react";
import { Container, ProductList, Title } from "./styles";
import { useParams } from "react-router-dom";
import Product from "../../components/product";
import { connect } from "react-redux";
import { GetCategory } from "../../features/category/categorySlice";



class Index extends Component {
 

  componentDidMount() {
    this.props.GetCategory('all');
  
  }

  componentDidUpdate(state, props) {

  }

  render() {
    const { category, products } = this.props;
    // console.log(category);

    return (
      <Container>

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

export default connect(mapStateToProps, mapDispatchToProps)(Index)
