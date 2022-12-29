import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "./styles";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="next" onClick={onClick}>
      <MdKeyboardArrowRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="prev" onClick={onClick}>
      <MdKeyboardArrowLeft />
    </div>
  );
};


export default class index extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    const { images, qty } = this.props;
    return (
      <Container>
        
        <Slider {...settings}>
          {images && images.map((item, index) => <img src={item} key={index} alt="" />)}
        </Slider>
      </Container>
    );
  }
}
