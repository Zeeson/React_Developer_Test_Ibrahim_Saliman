import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  gap: 20px;
`;

export const MainImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 16px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contan;
  }
`;

export const Thumbs = styled.div`
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  grid-gap: 30px;

  .thumb {
    width: 70px;
    height: 70px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    border-radius: 16px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
