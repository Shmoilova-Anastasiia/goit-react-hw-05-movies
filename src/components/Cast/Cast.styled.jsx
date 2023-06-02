import styled from '@emotion/styled';

export const Image = styled.img`
  display: block;
  border: 2px solid rgba(0, 255, 0, 0.5);
  border-radius: 5px;
  width: 160px;
`;

export const ListCast = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 40px;
`;

export const ItemCast = styled.li`
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
  }
`;

export const NameCast = styled.h3`
  max-width: 160px;
  color: #fff;
  font-size: 19px;
  text-align: center;
  font-weight: 500;
  margin-top: 8px;
`;

export const RoleCast = styled.p`
  max-width: 160px;
  color: rgb(255, 89, 0);
  font-size: 14px;
  text-align: center;
  font-weight: 300;
  margin-top: 6px;
`;

export const ErrorCast = styled.p`
  color: #fff;
  font-size: 26px;
  text-align: center;
  font-weight: 300;
  margin-top: 20px;
  margin-bottom: 20px;
`;
