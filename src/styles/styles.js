import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--font-common), var(--font-fallback);
  &.active {
    color: var(--primary);
  }
`;

export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

