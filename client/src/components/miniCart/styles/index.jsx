import styled from "styled-components";

export const Container = styled.div`
  padding: 3% 8%;
  background: #fff;

  .total-block {
    width: 295px;
    display: flex;
    /* justify-content: space-between; */
    flex-direction: row;
    margin: 0;
    padding: 20px 0;
  }
  .text-left {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #1d1f22;
    margin: 0;
  }
  .text-right {
    font-weight: 700;
    font-size: 16px;
    line-height: 112%;
    color: #1d1f22;
    margin: 0;
  }
  .minicart-buttons {
    display: flex;
    flex-direction: row;
    margin: 0;
  }
  .link-view-bag {
    background: #ffffff;
    border: 1px solid #1d1f22;
    color: #1d1f22;
    text-align: center;
    text-transform: uppercase;
    width: 140px;
    height: 41px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-checkout {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
    background: #5ece7b;
    border: 1px solid #5ece7b;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
    width: 140px;
    height: 43px;
    padding: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
  }
`;
export const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
export const List = styled.div`
 display: flex;
 flex-direction: column;
 gap: 20px;
`;
