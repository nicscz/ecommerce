import { styled } from "styled-components";

export const List = styled.ul`
  height: 10.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


  .totalProducts {
    border-bottom: 2px solid #eeeeee9d;
    padding-bottom: 5px;
  }

  margin-bottom: 50px;

  .productCard {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    max-width: 900px;
    align-items: center;
    border: 1px solid #f8f8f8;  
  }

  .productCard:hover{
    background-color: #eeeeee3e;
    cursor: pointer;
    transition: all 0.3s ease
  }

  .productImage {
    margin-left: 30px;
    margin-right: 20px;
    object-fit: contain;
    width: 120px;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }


  .productPrice {
    margin-left: 150px;
    margin-right: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }

  .promoPrice, .originalPrice {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .originalPrice {
    text-decoration: line-through;
    color: #b1b1b1
  }

  .tittleAndDescription {
    display: flex;
    flex-direction: column;
  }
`;
