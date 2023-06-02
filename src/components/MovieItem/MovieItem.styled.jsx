import styled from '@emotion/styled';

export const ItemMovie = styled.li`
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    scale: 1.1;
  }
`;

export const TitleMovie = styled.h2`
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-transform: uppercase;
  padding-top: 8px;
  max-width: 240px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: rgb(255, 89, 0);
    font-weight: 600;
  }
`;

export const ImgMovie = styled.img`
  width: 240px;
  border-radius: 10px;
  border: 3px solid rgba(0, 255, 0, 0.5);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    animation: glow 800ms ease-out infinite alternate;
    background: #222922;
    background: linear-gradient(#333933, #222922);
    border-color: #393;
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1);
    color: #efe;
    outline: none;
  }
`;
