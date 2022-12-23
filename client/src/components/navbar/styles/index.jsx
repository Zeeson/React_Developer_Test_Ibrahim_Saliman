import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  height: 10vh;
`;
export const Logo = styled(Link)`
  width: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const MenuLeft = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #1d1f22;
    transition: all 0.3s;
    position: relative;

    &.active {
      color: #5ece7b;
      &::after {
        content: "";
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: -10px;
        left: 0;
        background-color: #5ece7b;
        transition: all 0.3s;
      }
    }

    &::after {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      bottom: -10px;
      left: 0;
      background-color: #5ece7b;
      transition: all 0.3s;
    }

    &:hover {
      color: #5ece7b;

      &::after {
        width: 100%;
      }
    }
  }
`;

export const MenuRight = styled.div`
  display: flex;
  gap: 20px;
  font-size: 20px;
`;

export const CurrencySwitcher = styled.div`
  position: relative;

  .currency__list {
    position: absolute;
    right: -50px;
    top: 150%;
    width: 100px;
    text-align: center;
    box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.09);
    display: ${(p) => (p.open ? "grid" : "none")};
    border-radius: 8px;
    overflow: hidden;

    span {
      padding: 10px;
      transition: all 0.3s;
      &:hover {
        background-color: #eeeeee;
      }
    }
  }
`;
export const CurrencyList = styled.div`
  position: absolute;
  right: -50px;
  top: 150%;
  width: 100px;
  text-align: center;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.09);
  display: ${(p) => (p.open ? "grid" : "none")};
  border-radius: 8px;
  overflow: hidden;

  span {
    padding: 15px;
    transition: all 0.3s;
    font-size: 15px;
    &:hover {
      background-color: #eeeeee;
    }
  }
`;
export const Cart = styled.div``;
