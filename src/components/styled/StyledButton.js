import styled from "@emotion/styled";

export const StyledButton = styled("button")`
  color: inherit;
  background: inherit;
  border: ${props => `3px solid var(--${props.user}-primary)`};
  border-radius: 10px;
  padding: 0.5rem;
  outline: none;
  height: 100%;
  opacity: 1;

  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 900;
  transition: var(--color-transition);
  &:active {
    transform: translateY(5px);
    border: ${props => `3px solid var(--${props.user}-secondary)`};
  }
`;
