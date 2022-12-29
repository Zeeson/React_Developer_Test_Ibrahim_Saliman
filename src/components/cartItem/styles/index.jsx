import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .qty {
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column-reverse;

    button {
      width: 30px;
      height: 30px;
      background: #242024;
      outline: none;
      border: none;
      font-size: 20px;
      color: #fff;
    }
  }
`;
export const Details = styled.div``
export const Title = styled.div``
export const Attributes = styled.div``

export const FilterColor = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  ${(props) =>
    props.color === "#FFFFFF"
      ? `background-color: ${props.color};`
      : `background-color: ${props.color}`};
  ${(props) =>
    props.selected
      ? `
      border: 2px solid rgba(51, 51, 51, 0.447)`
      : `none`};
`;

export const Sizes = styled.div`
  .title {
    font-size: 17px;
    margin-bottom: 5px;
  }

  .size__list {
    display: flex;
    gap: 5px;
  }

  .size {
    padding: 10px 15px;
    background: #4242;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover {
      border: 2px solid rgba(66, 66, 66, 0.237);
    }
  }
`;
export const Size = styled.div`
  width: 50px;
  height: 30px;
  background: #4242;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  ${(p) =>
    p.selected
      ? `
      border: 2px solid rgba(51, 51, 51, 0.415)`
      : `none`};

  &:hover {
    border: 2px solid rgba(66, 66, 66, 0.237);
  }
`;
export const Colors = styled.div`
  .title {
    font-size: 17px;
    margin-bottom: 5px;
  }

  .color__container {
    display: flex;
    /* justify-content:  ; */
    gap: 10px;
  }
`;