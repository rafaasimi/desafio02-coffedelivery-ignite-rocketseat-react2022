import styled from "styled-components";

export const ProductListContainer = styled.div`
  max-width: calc(1120px + 2rem);
  padding: 2rem 2rem;
  margin: 0 auto;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    line-height: 1.3;
    font-weight: 800;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-bottom: 3.375rem;
  }
`;

export const ProductListItems = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;
