import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-width: calc(1120px + 2rem);
  padding: 2rem 2rem;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    display: flex;
    align-items: center;
    gap: 4px;

    padding: 0.5rem 0.625rem;
    border-radius: 6px;

    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};

    font-size: 14px;

    svg {
      color: ${(props) => props.theme["purple"]};
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme["yellow-light"]};

    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }

    span {
      position: absolute;
      top: -10px;
      right: -10px;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme["white"]};
      background: ${(props) => props.theme["yellow-dark"]};

      width: 1.25rem;
      height: 1.25rem;

      font-size: 12px;
      font-weight: bold;
      border-radius: 50%;
    }
  }
`;
