import styled from "styled-components";

export const Container = styled.div`
  padding: 3% 8%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  width: 100%;
`;

export const Details = styled.div`
 display: flex;
 flex-direction: column;
 gap: 30px;
`;

export const Brand = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;
export const Title = styled.h3`
  font-size: 17px;
  font-weight: 600;
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
export const Color = styled.div`
  width: 30px;
  height: 30px;
  background: ${(p) => p.color};
  transition: all 0.3s;
  padding: 1px;
  border: ${(p) => (p.selected ? "2px solid rgba(66, 66, 66, 0.237)" : "none")};

  &:hover {
    border: 2px solid rgba(66, 66, 66, 0.237);
  }
`;
export const Price = styled.div`
  .title {
    font-size: 17px;
    margin-bottom: 5px;
  }

  p {
    font-size: 18px;
    font-weight: 600;
  }
`;
export const AddToCart = styled.button`
  display: inline;
  width: 150px;
  background-color: #5ECE7B;
  color: #fff;
  outline: none;
  border: none;
  padding: 10px 20px;
  transition: all 0.3s;

  &:hover {
    background-color: #49f276;
  }
`;
export const Desc = styled.div``;







export const TextOutOfStock = styled.div`
  text-transform: uppercase;
  position: absolute;
  left: 25.42%;
  right: 25.71%;
  top: 200px;
  display: block;
  font-weight: 400;
  font-size: 36px;
  line-height: 160%;
  color: #8d8f9a;
`;

export const FilterColor = styled.div`
  width: 32px;
  height: 32px;
  cursor: pointer;
  ${(props) =>
    props.color === "#FFFFFF"
      ? `background-color: ${props.color}; outline-offset: -1px; outline: 1px solid black`
      : `background-color: ${props.color}`};
  ${(props) =>
    props.selected
      ? `outline-offset: 1px; outline: 1px solid #5ECE7B`
      : `none`};
`;