import styled from "styled-components";

export const Container = styled.div`
  padding: 3% 8%;

  .order-description {
    display: flex;
    flex-direction: row;
    gap: 5px;
    color: #1d1f22;
    text-align: flex-start;
    margin-top: 32px;
  }
  .order-text {
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin: 0;
    text-align: left;
    margin: 0 0 8px 0;
  }
  .order-quantity {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin: 0 0 8px 0;
    text-align: left;
  }
  .order-btn {
    display: block;
    justify-self: start;
    text-align: center;
    margin-top: 8px;
    width: 279px;
    height: 43px;
    border: none;
    background: #5ece7b;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: #ffffff;
    text-transform: uppercase;
  }
`;
export const Title = styled.h3`
  font-size: 25px;
  font-weight: 600;
`;
export const List = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
`;
