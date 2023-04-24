import { type ChangeEvent, useState } from "react";
import styled from "styled-components";
import { Input } from "../styles";

interface PasswordInputProps {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput = (props: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState(true);
  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled
          {...props}
          required
          type={showPassword ? "text" : "password"}
          placeholder="Password"
        />
        <ToggleButton
          onClick={() => {
            setShowPassword((prev) => !prev);
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </ToggleButton>
      </PasswordInputWrapper>
    </>
  );
};

const PasswordInputStyled = styled(Input)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`;

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  font-size: 0.9em;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  color: black;
`;

export default PasswordInput;
