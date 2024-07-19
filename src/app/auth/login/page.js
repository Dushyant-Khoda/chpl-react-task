"use client";

import { LoadingButton } from "@mui/lab";
import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  Link,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const Router = useRouter();
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);
  const doHandleFormSubmit = () => {
    const storedData = JSON.parse(localStorage.getItem("userRecords")) || [];
    const mobileExists = storedData.some((data) => data.email === email);
    if (mobileExists) {
      // alert("Data already exists!");
      Router.push("/dashboard");
      // return;
    } else {
      alert("User Not Found!");
    }
  };

  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return (
    <Box style={{ width: "100%" }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            maxWidth: 400,
            margin: "auto",
            display: "flex",
            minHeight: "100vh",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              boxShadow:
                "0 0 2px 0 rgba(145, 158, 171, 0.2), 0 12px 24px -4px rgba(145, 158, 171, 0.12)",
            }}
            style={{
              padding: "50px 25px",
              borderRadius: "20px",
              background: "white",
            }}
          >
            <Stack direction="column" alignItems="center">
              <Box>
                <img
                  alt="login"
                  src="https://res.cloudinary.com/dsidb5jqw/image/upload/v1696488812/user_yqn4ye.png"
                  style={{ width: "100px" }}
                />
              </Box>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  fontWeight={700}
                  textAlign="center"
                  variant="h4"
                  gutterBottom
                >
                  Welcome Back!
                </Typography>
                <Box style={{ display: "flex", justifyContent: "center" }}>
                  <p style={{ margin: "0px" }}>Don't have an account?</p>
                  <p style={{ margin: "0px" }}>
                    <Link
                      href="/auth/register"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Box
                        style={{
                          marginLeft: 5,
                          textDecoration: "none",
                          color: "inherit",
                          fontWeight: "bold",
                        }}
                      >
                        Create One
                      </Box>
                    </Link>
                  </p>
                </Box>
              </Box>
            </Stack>

            <p className="divider line one-line">or</p>
            <Stack spacing={3}>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  id="outlined-title"
                  name="email"
                  label="Email address"
                  variant="outlined"
                  value={email}
                  onChange={(e) => {
                    // setEmail(e.target.value);
                    setEmail(e.target.value);
                    if (emailRegex.test(e.target.value)) {
                      setEmailValid(true);
                    } else {
                      setEmailValid(false);
                    }
                  }}
                />
                <Box
                  style={{
                    display:
                      email.length > 3 && !emailRegex.test(email)
                        ? "flex"
                        : "none",
                    alignItems: "center",
                    color: "#e74c3c",
                    marginTop: "5px",
                    marginLeft: "5px",
                  }}
                >
                  <span style={{ marginLeft: "5px", fontSize: "14px" }}>
                    Email is not valid
                  </span>
                </Box>
              </Box>
              <Box style={{ display: "flex", flexDirection: "column" }}>
                <TextField
                  name="password"
                  label="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type={showPassword ? "text" : "password"}
                />
                <span style={{ marginLeft: "5px", fontSize: "14px" }}>
                  Use any password and must be greater than 4 characters.
                </span>
              </Box>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="end"
              sx={{ my: 2 }}
            >
              <Box style={{ cursor: "pointer", fontWeight: "bold" }}>
                Forgot password?
              </Box>
            </Stack>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              style={{
                opacity:
                  email.length < 3 || password.length < 3 || !emailValid
                    ? 0.5
                    : 1,
                cursor:
                  email.length < 3 || password.length < 3 || !emailValid
                    ? "not-allowed"
                    : "pointer",
                backgroundColor: "#212b36",
              }}
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                if (email && password) {
                  doHandleFormSubmit();
                }
              }}
            >
              Continue
            </LoadingButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default page;
