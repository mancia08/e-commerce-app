import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.div`
    display: flex;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background-color: var(--light);
`;

export const StyledLink = styled(NavLink)`
  color: var(--dark);
  box-sizing: border-box;
  font-family: var(--font-common), var(--font-fallback);
  width: 10%;
  text-align: center;
  line-height: var(--height50-nav);
  text-decoration: none;
  &.active {
    color: var(--primary);
  }
  :hover {
    color: var(--light);
    background-color: var(--primary);
  }
`;

export const LogoLink = styled(NavLink)`
  margin-right: auto;
`;

export const LogoImg = styled.img`
  width: auto;
  height: var(--height50-nav);
`;


