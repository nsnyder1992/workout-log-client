import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    if (username === "") {
      setUsernameErr("user name is required");
      return;
    }

    fetch("http://localhost:3000/user/login", {
      method: "POST",
      body: JSON.stringify({ username: username, password: password }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
      .then((res) => res.json())
      .then((json) => props.updateToken(json.sessionToken))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p color="red">{usernameErr}</p>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p color="red">{passwordErr}</p>
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
    </div>
  );
};

export default Login;
