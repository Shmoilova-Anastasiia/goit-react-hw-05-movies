import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 50px 15px 0 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

export const ButtonSearch = styled.button`
  background: #222;
  background: linear-gradient(#333, #222);
  box-sizing: border-box;
  border: 1px solid #393;
  border-radius: 10px;
  color: #fff;
  display: block;
  float: left;
  font-size: 18px;
  font-weight: 600;
  height: 40px;
  line-height: 40px;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: #292929;
    background: linear-gradient(#393939, #292929);
    color: rgb(255, 89, 0);
    outline: none;
  }
`;

export const Input = styled.input`
  margin-top: 8px;
  margin-bottom: 30px;
  height: 40px;
  width: 500px;
  background: transparent;
  outline: none;
  border-radius: 10px;
  border: 2px solid #444;
  font-size: 23px;
  color: rgb(220, 231, 255);
  padding-left: 15px;
  padding-right: 15px;
  padding-top: auto;

  &:focus {
    animation: glow 800ms ease-out infinite alternate;
    background: #222922;
    background: linear-gradient(#333933, #222922);
    border-color: #393;
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.2), inset 0 0 5px rgba(0, 255, 0, 0.1);
    color: #efe;
    outline: none;
  }

  &::placeholder {
    color: #a09b9b;
    font-size: 23px;
  }
`;

export const Label = styled.label`
  color: rgb(220, 231, 255);
  font-size: 29px;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 15px;
`;
