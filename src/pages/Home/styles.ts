import styled from "styled-components";

export const MainWrapper = styled.main`
  background-image: url("src/assets/bg-blur.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainContainer = styled.main`
  max-width: calc(1120px + 2rem);
  padding: 5.75rem 2rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 476px;
  align-items: center;
  gap: 56px;

  h1 {
    font-weight: 900;
    font-size: 3rem;
    color: ${(props) => props.theme["base-title"]};
    line-height: 1.3;

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme["sub-title"]};
    line-height: 1.3;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2.75rem 2rem;
    text-align: center;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1.125rem;
    }
  }

  img {
    width: 100%;
  }
`;

export const FeatureList = styled.ul`
  margin-top: 4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  list-style: none;

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) => props.theme["white"]};
      background: black;
      padding: 0.5rem;
      border-radius: 50%;
    }

    &:nth-child(1) span {
      background: ${(props) => props.theme["yellow-dark"]};
    }

    &:nth-child(2) span {
      background: ${(props) => props.theme["base-text"]};
    }

    &:nth-child(3) span {
      background: ${(props) => props.theme["yellow"]};
    }

    &:nth-child(4) span {
      background: ${(props) => props.theme["purple"]};
    }

    p {
      font-size: 16px;
    }
  }

  @media (max-width: 768px) {
    li {
      text-align: left;
    }
  }
`;
