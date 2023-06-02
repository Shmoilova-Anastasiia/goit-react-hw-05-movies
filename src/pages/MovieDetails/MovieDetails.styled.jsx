import styled from '@emotion/styled';

export const Back = styled.button`
  margin-top: 35px;
  margin-bottom: 10px;
  padding: 5px 20px;
  color: rgb(220, 231, 255);

  background: #222;
  background: linear-gradient(#333, #222);
  box-sizing: border-box;
  border: 1px solid #393;
  border-radius: 10px;

  width: 100px;
  height: 30px;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 550;
  font-size: 14px;

  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #292929;
    background: linear-gradient(#393939, #292929);
    color: rgb(255, 89, 0);
  }
`;

export const InfoBox = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImageBox = styled.div`
  margin-top: 20px;
  padding: 5px 20px 5px 5px;
`;

export const Image = styled.img`
  min-width: 240px;
  max-width: 250px;
  display: block;
  border: 3px solid rgba(0, 255, 0, 0.5);
  border-radius: 10px;
`;

export const InfoText = styled.div`
  width: 100%;
`;

export const Caption = styled.h2`
  padding: 20px 0 0 0;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 35px;
  border-bottom: 1px solid rgba(0, 255, 0, 0.4);
`;

export const Title = styled.h3`
  color: rgb(255, 89, 0);
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 5px;
  margin-top: 10px;
`;

export const Text = styled.p`
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 15px;
`;

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  padding: 30px;
  margin-top: 20px;
  border-top: 2px solid rgba(0, 255, 0, 0.4);
`;

export const LinkItem = styled.li`
  padding: 0px 5px;
  border-radius: 5px;
  border: 1px solid rgba(0, 255, 0, 0.4);
`;

export const LinkMov = styled.a`
  font-size: 25px;
  color: #fff;
  text-transform: uppercase;

  &:hover,
  &:focus {
    color: rgb(255, 89, 0);
  }
`;

export const LinkActive = styled.a`
  font-size: 25px;
  font-weight: 500;
  color: rgb(255, 89, 0);
  text-transform: uppercase;
`;
