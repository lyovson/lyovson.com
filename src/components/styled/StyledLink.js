import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 0.5rem;

  border: ${props => `3px solid var(--${props.user}-primary)`};
  border-radius: 10px;

  height: 100%;

  &:hover {
    border: ${props => `3px solid var(--${props.user}-secondary)`};
  }
  &:active {
    transform: translateY(5px);
    border: ${props => `3px solid var(--${props.user}-secondary)`};
  }
`;
