import styled from "styled-components";

export const Container = styled.div`
width: 130px;
height: 130px;
 
  position: relative;
  overflow: hidden;

  .prev {
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 30%;
    bottom: 10%;
    font-size: 25px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;
    z-index: 3;

    &:hover {
      transform: scale(1.1);
    }
  }
  .next {
    width: 15px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10%;
    bottom: 10%;
    font-size: 25px;
    color: #fff;
    background: rgba(0, 0, 0, 0.5);
    transition: all 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;