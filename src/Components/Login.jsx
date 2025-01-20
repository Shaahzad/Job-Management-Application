import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");

  const hardcodeEmail = "admin@example.com";
  const hardcodePassword = "password123";

  const LoginHandler = () => {
    if (!email && !password) {
      setEmailError("Email cannot be empty");
      setPasswordError("Password cannot be empty");
    } else if (!email) {
      setEmailError("Email cannot be empty");
    } else if (!password) {
      setPasswordError("Password cannot be empty");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else if (email === hardcodeEmail && password === hardcodePassword) {
      localStorage.setItem('credential', JSON.stringify(email))
      setPassword("");
      setEmail("");
      setEmailError("");
      setPasswordError("");
      toast.success("Login successful");
    } else if (email !== hardcodeEmail) {
      setEmailError("Invalid email");
    } else if (password !== hardcodePassword) {
      setPasswordError("Invalid password");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Card
      sx={{
        maxWidth: { md: "500px", xs: "300px" },
        margin: "auto",
        marginTop: "100px",
        padding: "10px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          sx={{
            fontSize: { md: "40px", xs: "24px" },
            fontWeight: "bold",
            marginBottom: "0px",
          }}
        >
          Recruiter Login
        </Typography>
        <Typography
          variant="body2"
          sx={{
            marginBottom: "20px",
            color: "gray",
            fontSize: { md: "16px", xs: "12px" },
          }}
        >
          Manage job postings effortlessly. Sign in to access your dashboard and
          find the best candidates.
        </Typography>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="outlined-basic"
            placeholder="Enter Email Address"
            sx={{ width: "100%" }}
            style={{
              border: emailerror ? "1px solid var(--secondary-color)" : "none",
              borderRadius: "4px",
            }}
          />
          {emailerror && (
            <Typography
              variant="body2"
              sx={{ color: "red", fontSize: "14px", fontWeight: "bold" }}
            >
              {emailerror}
            </Typography>
          )}
          <OutlinedInput
            style={{
              border: passworderror ? "1px solid var(--secondary-color)" : "none",
              borderRadius: "4px",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            placeholder="Enter Password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          {passworderror && (
            <Typography
              variant="body2"
              sx={{ color: "red", fontSize: "14px", fontWeight: "bold" }}
            >
              {passworderror}
            </Typography>
          )}
          <Button
            onClick={LoginHandler}
            variant="contained"
            sx={{
              backgroundColor: "var(--primary-color)",
              color: "var(--background-color)",
              borderRadius: "30px",
              padding: "12px",
              fontWeight: "bold",
              marginTop: "20px",
            }}
          >
            login
          </Button>
          <Toaster />
        </div>
      </CardContent>
    </Card>
  );
};

export default Login;
