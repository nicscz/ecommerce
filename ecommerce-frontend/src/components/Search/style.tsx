import styled from "styled-components";

export const Container = styled.div`
  .search-input-container {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 20px;
    border: 1px solid #ebebeb;
    padding: 5px;
    width: auto;
    margin-right: 20px;

    .inputSearch {
      border: none;
      outline: none;
      width: 300px;
      min-width: 140px;
    }
    .search-icon input {
      position: absolute;
      right: 10px;
      border: none;
      cursor: pointer;
    }

    .search-icon:hover{
    background-color: #cccccc3d;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 50%;
  }
  }
`
