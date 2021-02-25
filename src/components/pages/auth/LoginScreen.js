import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import React from "react";
import HomeIcon from "@material-ui/icons/Home";

export const LoginScreen = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register");
  };

  return (
    <div className="login__container">
      <div className="login__back">
        <IconButton href="/" aria-label="Home">
          <HomeIcon />
        </IconButton>
      </div>
      <div className="login__cards">
        <div className="login__loginCard">
          <form className="login__loginForm">
            <FormGroup>
              <FormControl>
                <InputLabel> Email </InputLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="off"
                  className="login__input"
                />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>
              <FormControl>
                <InputLabel> Password </InputLabel>
                <Input
                  name="password"
                  type="password"
                  className="login__input"
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleLogin}
              >
                Login
              </Button>
            </FormGroup>
          </form>
        </div>
        <div className="login__registerCard">
          <form className="login__registerForm">
            <FormGroup>
              <FormControl>
                <InputLabel> Username </InputLabel>
                <Input
                  name="name"
                  type="text"
                  autoComplete="off"
                  className="login__input"
                />
              </FormControl>
              <FormControl>
                <InputLabel> Email </InputLabel>
                <Input
                  name="email"
                  type="email"
                  autoComplete="off"
                  className="login__input"
                />
              </FormControl>
              <FormControl>
                <InputLabel> Password </InputLabel>
                <Input
                  name="password"
                  type="password"
                  className="login__input"
                />
              </FormControl>
              <FormControl>
                <InputLabel> Confirm password </InputLabel>
                <Input
                  name="password2"
                  type="password"
                  className="login__input"
                />
              </FormControl>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleRegister}
              >
                Login
              </Button>
            </FormGroup>
          </form>
        </div>
      </div>
    </div>
  );
};
