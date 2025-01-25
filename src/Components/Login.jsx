import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Button,
  Divider,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Container
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { GitHub, Google, LinkedIn } from "@mui/icons-material";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const navigate = useNavigate();
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
      navigate("/joblist");
    } else if (email !== hardcodeEmail) {
      setEmailError("Invalid email");
    } else if (password !== hardcodePassword) {
      setPasswordError("Invalid password");
    }
  };

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem('credential'));
    if (getUser) {
      navigate('/joblist');
    }
  }, [navigate]);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Card
        sx={{
          maxWidth: "500px",
          margin: "auto",
          marginTop: "50px",
          padding: "10px",
          borderRadius: "10px",
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
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px", marginBottom: "20px" }}>
            <Typography style={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: "center", gap: "5px", backgroundColor: 'var(--background-color)', padding: '10px', cursor: 'pointer', borderRadius: '8px', transition: 'transform 0.2s ease', fontWeight: 'bold' }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              With LinkedIn
              <LinkedIn />
            </Typography>
            <Typography style={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: "center", gap: "5px", backgroundColor: 'var(--background-color)', padding: '10px', cursor: 'pointer', borderRadius: '8px', transition: 'transform 0.2s ease', fontWeight: 'bold' }}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              With Google
              <Google />
            </Typography>
          </div>
          <Divider>OR</Divider>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginTop: "20px" }}>
            <TextField
              error={emailerror ? true : false}
              helperText={emailerror}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="outlined-basic"
              placeholder="Enter Email Address"
              variant="outlined"
              sx={{
                "& .MuiFormHelperText-root": {
                  marginLeft: 0
                },
              }}
            />
            <TextField
              error={passworderror ? true : false}
              helperText={passworderror}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="outlined-adornment-password"
              placeholder="Enter Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              sx={{
                "& .MuiFormHelperText-root": {
                  marginLeft: 0
                },
              }}
              InputProps={{
                endAdornment: (
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
                ),
              }}
              fullWidth
            />
            <Button
              onClick={LoginHandler}
              sx={{
                backgroundColor: "var(--primary-color)",
                color: "var(--background-color)",
                borderRadius: "30px",
                padding: "12px",
                fontWeight: "bold",
              }}
            >
              login
            </Button>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <Typography sx={{ color: 'var(--primary-color)', textDecoration: 'underline', cursor: 'pointer' }}>Don't have an account? Sign Up</Typography>
              <Typography sx={{ color: 'var(--primary-color)', textDecoration: 'underline', cursor: 'pointer' }}>Forgot Password?</Typography>
            </div>
            <Toaster />
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
