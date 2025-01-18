import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  
    const handleMouseUpPassword = (event) => {
      event.preventDefault();
    };

    return (
        <Card sx={{ maxWidth: 360, margin: 'auto', marginTop: '50px', padding: '10px' }}>
            <CardContent>
              <Typography gutterBottom sx={{fontSize: '40px', fontWeight: 'bold'}}>
                Recruiter Login
                <Typography variant="body2" sx={{marginBottom: '50px', color: 'gray'}}>
                Manage job postings effortlessly. Sign in to access your dashboard and find the best candidates.
                </Typography>
              </Typography>
               <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <TextField id="outlined-basic" placeholder='Enter Email Address' sx={{width:'100%'}}/>
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
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
            label="Password"
          />              
          <Button variant="contained" sx={{backgroundColor: '#3f51b5', color: 'white',borderRadius: '30px', padding: '12px', fontWeight: 'bold'}}>
               login
              </Button>
               </div>
            </CardContent>
        </Card>
      );
}

export default Login