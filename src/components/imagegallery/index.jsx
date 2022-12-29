import React, { Component } from "react";
import { Container, Thumbs, MainImage } from "./styles";

export default class index extends Component {
  state = {
    activeImage: 0
  };

 

  render() {
    const { images } = this.props;
      return (
        <Container>
          
          <Thumbs>
            {images &&
              images.map((img, i) => (
                <div className="thumb" key={i}>
                  <img
                    src={img}
                    alt=""
                    onClick={() => this.setState({ activeImage: i })}
                  />
                </div>
              ))}
          </Thumbs>
          <MainImage>
            {images && <img src={images[this.state.activeImage]} alt="" />}
          </MainImage>
        </Container>
      );
  }
}
