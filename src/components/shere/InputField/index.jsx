import React from "react";
import styled from "styled-components";
import { Input, P } from "../../ui";

const Div = styled.div`
  margin: 1vh 0vh;
`;

const InputField = ({
  onChange,
  onBlur,
  label,
  type,
  name,
  value,
  placeholder,
  error,
}) => {
  return (
    <Div>
      <label htmlFor={name}>
        <P>{label}</P>
      </label>
      <Input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        error={error}
      />
    </Div>
  );
};

export default InputField;
