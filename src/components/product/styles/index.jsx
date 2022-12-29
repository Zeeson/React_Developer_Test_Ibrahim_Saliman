import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    0% {
        transform:  translateX(-20px);
        opacity: 0;
       
    }
    100% {
          transform:  translateX(0);
           opacity: 1;
    }
`;

export const Container = styled.div`
  width: 300px;
  height: auto;
  padding: 10px;
  transition: all 0.5s;

  &:hover {
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.281);

    .cart__btn {
      display: flex;
      animation: ${fadeIn} 0.3s ease;
    }
  }
`;

export const Image = styled.div`
  overflow: hidden;
  width: 100%;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const Details = styled.div`
  display: grid;
  grid-gap: 10px;
  padding: 10px 0;
  position: relative;

  .cart__btn {
    top: -25px;
    right: 25px;
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50px;
    outline: none;
    border: none;
    color: #fff;
    display: none;
    justify-content: center;
    align-items: center;
    background-color: #5ece7b;
  }
`;
export const Title = styled(Link)`
  letter-spacing: 1px;
  font-size: 20px;
  font-weight: 200;
  color: #333;

  
`;
export const Price = styled.p`
  font-weight: 600;
  letter-spacing: 1px;
`;
