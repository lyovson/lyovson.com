import styled from "@emotion/styled";

export const StyledButton = styled("button")`
  color: #704e7a;
  background: inherit;
  border: 0px;
  padding: 0.5rem;
  outline: none;
  height: 100%;
  opacity: 1;

  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 900;
  transition: var(--color-transition);
  text-align: center;

  &:active {
    transform: translateY(5px);
  }

  a {
    font-size: 1.5rem;
    color: ${props => `var(--${props.user}-primary)`};
  }
`;
