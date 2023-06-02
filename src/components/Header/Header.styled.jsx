import styled from '@emotion/styled';

export const HeaderStyle = styled.header`
  animation: glow 800ms ease-out infinite alternate;
  background-color: rgba(55, 59, 68, 0.4);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 4px rgba(0, 255, 0, 0.2), 0 0 7px rgba(0, 255, 0, 0.2),
    0 0 7px rgba(0, 255, 0, 0.2), 0 0 7px rgba(0, 255, 0, 0.2),
    0 0 12px rgba(0, 255, 0, 0.2), 0 0 12px rgba(0, 255, 0, 0.2),
    0 0 7px rgba(0, 255, 0, 0.2), 0 0 12px rgba(0, 255, 0, 0.2);
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
`;

export const NavItem = styled.li`
  font-weight: 700;
  font-size: 32px;
  color: #fff;
  text-transform: uppercase;
`;
// export const NavItemActive = styled.li`
//   font-weight: 700;
//   font-size: 25px;
//   color: rgb(255, 89, 0);
//   text-transform: uppercase;
// `;
