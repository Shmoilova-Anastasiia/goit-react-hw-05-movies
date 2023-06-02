import { NavLink } from 'react-router-dom';
import { HeaderStyle, NavList, NavItem } from './Header.styled';

export const Header = () => {
  // const activeClassName = ({ isActive }) =>
  //   isActive ? <NavItemActive></NavItemActive> : NavItem;
  return (
    <HeaderStyle>
      <nav>
        <NavList>
          <li>
            <NavLink to="/">
              <NavItem>Home</NavItem>
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies">
              <NavItem>Movies</NavItem>
            </NavLink>
          </li>
        </NavList>
      </nav>
    </HeaderStyle>
  );
};
