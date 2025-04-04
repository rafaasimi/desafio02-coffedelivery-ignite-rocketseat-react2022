import styled from "styled-components";

export const ProductItemContainer = styled.div`
  flex: 0 1 calc(25% - 2rem);

  display: flex;
  flex-direction: column;

  position: relative;
  padding: 1.25rem;
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme["base-card"]};

  img {
    position: relative;
    top: calc(-1.25rem - 14px);

    display: block;
    margin: 0 auto;
  }

  h3,
  p {
    text-align: center;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 1.3;

    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["base-title"]};
  }

  p {
    margin-top: 0.5rem;

    font-size: 0.875rem;
    line-height: 1.3;

    color: ${(props) => props.theme["base-label"]};
  }

  @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

export const ProductItemCategories = styled.div`
  margin-top: calc(-1.25rem - 2px);
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    padding: 0.25rem 0.5rem;
    border-radius: 99px;

    font-weight: bold;
    font-size: 0.625rem;
    line-height: 1.3;

    text-transform: uppercase;

    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
  }
`;

export const ProductItemForm = styled.div`
  margin-top: auto;
  padding-top: 2rem;

  display: flex;
  align-items: center;

  gap: 8px;

  > div {
    span {
      font-size: 0.875rem;
      margin-right: 0.25rem;
    }

    strong {
      font-family: "Baloo 2", sans-serif;
      font-size: 24px;
      font-weight: 800;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const ProductItemControls = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    background: ${(props) => props.theme["base-button"]};
    padding: 0.5rem;
    border-radius: 6px;

    input[type="number"] {
      max-width: 2rem;
      border: none;
      background: none;
      text-align: center;
      color: ${(props) => props.theme["base-title"]};
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    button {
      background: none;
      border: none;

      svg {
        color: ${(props) => props.theme["purple"]};

        &:hover {
          cursor: pointer;
          color: ${(props) => props.theme["purple-dark"]};
        }
      }
    }
  }

  > button {
    border: none;
    padding: 0.5rem;
    border-radius: 6px;
    background: ${(props) => props.theme["purple-dark"]};
    color: ${(props) => props.theme["white"]};

    line-height: 0;

    &:hover {
      background: ${(props) => props.theme["purple"]};
      cursor: pointer;
    }
  }
`;
