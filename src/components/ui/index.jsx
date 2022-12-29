import styled from "styled-components";

export const P = styled.p`
  font-size: ${(props) => props.size || "12px"};
  line-height: 22px;
  font-weight: 400;
  color: ${(props) => props.color || "var(--text_two)"};
`;
export const Button = styled.button`
  border: none;
  padding: 0.5vh 2vh;
  font-size: 14px;
  width: ${(props) => props.width || null};
  color: #fff;
  border-radius: 0.313rem;
  background: #50b5ff;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    background: #1395f5;
  }
`;

export const Input = styled.input`
  display: block;
  font-size: 12px;
  line-height: 22px;
  font-weight: 400;
  color: var(--text_two);
  border: 1px solid ${(props) => (props.error ? "#ff0000d1" : "#ced4da")};
  outline: none;
  width: 100%;
  border-radius: 0.313rem;
  padding: 0.375rem 0.75rem;
  margin: 0.7vh 0vh;
  &::placeholder {
    color: #555770b8;
  }
  &:focus {
    border: 1px solid #7dc8fe;
  }
`;
