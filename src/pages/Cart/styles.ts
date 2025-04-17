import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: calc(70rem + 32px);
  padding: 40px 32px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`;

export const CartForm = styled.form`
  > h2 {
    margin-bottom: 16px;

    font-family: "Baloo 2", sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const CartItems = styled.div`
  > h2 {
    margin-bottom: 16px;

    font-family: "Baloo 2", sans-serif;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.3;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const AddressForm = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  header {
    display: flex;
    align-items: start;
    gap: 8px;

    margin-bottom: 32px;

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    div {
      span {
        font-size: 16px;
        color: ${(props) => props.theme["base-subtitle"]};
        line-height: 1.3;
      }

      p {
        font-size: 14px;
        color: ${(props) => props.theme["base-text"]};
        line-height: 1.3;
      }
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    gap: 16px;

    grid-template-areas:
      "cep cep cep . . . . ."
      "street street street street street street street street"
      "number number number complement complement complement complement complement"
      "neighborhood neighborhood neighborhood city city city state state";

    input {
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme["base-button"]};

      color: ${(props) => props.theme["base-text"]};
      background: ${(props) => props.theme["base-input"]};

      &::placeholder {
        color: ${(props) => props.theme["base-label"]};
      }
    }

    input#cep {
      grid-area: cep;
    }

    input#street {
      grid-area: street;
    }

    input#number {
      grid-area: number;
    }

    input#complement {
      grid-area: complement;
    }

    input#neighborhood {
      grid-area: neighborhood;
    }

    input#city {
      grid-area: city;
    }

    input#state {
      grid-area: state;
    }
  }
`;
