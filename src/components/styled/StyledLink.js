import styled from "@emotion/styled";
import { Link } from "gatsby";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  padding: 0.5rem;
  border-bottom: 3px solid;
  border-image: var(--border-gradient);
  height: 100%;

  &:hover {
    font-style: italic;
  }
  &:active {
    transform: translateY(5px);

    font-style: italic;
  }
`;
