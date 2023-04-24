import { type ChangeEvent, useState, useEffect } from "react";
import styled from "styled-components";
import PageLayout from "../common/PageLayout.tsx";
import { Input, Button, Spinner } from "../styles";
import PasswordInput from "../common/PasswordInput.tsx";

interface FormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

let timeout = 0;

const Login = () => {
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("click");
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSub = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("sub");
  };

  useEffect(() => {
    return () => {
      if (timeout > 0) clearTimeout(timeout);
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <Spinner />
      <Form onSubmit={handleSub}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <Input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formFields.email}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="password"
              value={formFields.password}
              onChange={handleInputChange}
            />
          </>
        )}
        <Button large type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="submit">
              Sign Up
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
};

const Form = styled.div<FormProps>`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 16px;
  border: 1px solid #eee;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 0 auto;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }

  > ${Input} {
    margin-top: 20px;
  }
`;

export default Login;
