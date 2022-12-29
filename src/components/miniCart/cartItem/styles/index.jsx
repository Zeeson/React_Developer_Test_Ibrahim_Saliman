import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  .qty {
    font-size: 10px;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column-reverse;

    button {
      width: 30px;
      height: 30px;
      outline: none;
      border: none;
      border: 1px solid #242024;
      background: transparent;
      font-size: 20px;
      color: #000000;
    }
  }
`;
export const Details = styled.div``
export const Title = styled.div`
display: grid;
grid-gap: 3px;
margin-bottom: 5px;
`
export const Attributes = styled.div``

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
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
margin-bottom: 10px;
  .title {
    font-size: 12px;
    font-weight: 300;
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
  width: 30px;
  height: 20px;
  background: #4242;
  display: flex;
  font-size: 10px;

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
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 5px;
  }
  .color__container {
    display: flex;
    /* justify-content:  ; */
    gap: 10px;
  }
`;