import styled from "styled-components";

export const CartListContainer = styled.div`
  h2 {
    margin-bottom: 16px;

    font-family: "Baloo 2", sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CartListWrapper = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px 44px 6px 44px;
  margin-top: 0.75rem;

  display: flex;
  flex-direction: column;
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  .product-image {
    width: 4rem;
    height: 4rem;

    img {
      width: 100%;
    }
  }

  .product-info {
    h3 {
      font-family: "Baloo 2", sans-serif;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }
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
    display: flex;
    align-items: center;
    gap: 0.25rem;

    border: none;
    padding: 8px;
    border-radius: 6px;
    background: ${(props) => props.theme["base-button"]};
    color: ${(props) => props.theme["base-text"]};

    line-height: 0;

    svg {
      color: ${(props) => props.theme["purple"]};
    }

    &:hover {
      color: ${(props) => props.theme["base-subtitle"]};
      background: ${(props) => props.theme["base-hover"]};
      cursor: pointer;

      svg {
        color: ${(props) => props.theme["purple-dark"]};
      }
    }
  }
`;

export const Divider = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  height: 1px;
  background: ${(props) => props.theme["base-button"]};
`;

export const CartItemTotal = styled.div`
  margin-top: 1.5rem;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    margin-bottom: 1.5rem;

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      color: ${(props) => props.theme["base-text"]};
    }

    div strong {
      font-weight: bold;
    }
  }

  button {
    text-transform: uppercase;
    color: ${(props) => props.theme["white"]};
    background: ${(props) => props.theme["yellow"]};
    border: none;

    width: 100%;
    padding: 0.75rem 0.5rem;
    font-weight: bold;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["yellow-dark"]};
    }
  }
`;
