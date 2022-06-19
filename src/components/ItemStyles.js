import styled from "styled-components";

export const Producto = styled.div`
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid green;
  padding: 30px 20px;
  width: 33%;
  border-radius: 50px;
  display: flex;
  
  gap: 10px;

  h3 {
    text-align: center;
  }

  .stock {
    background-color: #df7c56;
    padding: 3px;
    font-weight: bolder;
    color: white;
    border-radius: 3px;
  }

  button {
    padding: 10px 0;
    text-transform: uppercase;
    font-weight: bolder;
  }

  .compra {
    border: none;
    color: white;
    background-color: #eb5e28;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.5) 50%,
      transparent 50%
    );
    background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.5) 50%,
      transparent 50%
    );
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 400ms ease-in-out;

    &:hover {
      background-position: 0;
      cursor: pointer;
    }

    .sinStock {
      background-color: #fffcf2;
      color: #fffcf257;
    }
  }
`;
