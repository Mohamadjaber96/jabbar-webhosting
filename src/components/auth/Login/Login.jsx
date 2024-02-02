import React from "react";
import { Button, TextField, Grid, Paper, Typography } from "@mui/material";

function Login() {
  return (
    <Paper style={{ padding: 20 }}>
      <Typography variant='h4'>Hi there!</Typography>
      <Typography variant='subtitle1'>Log in to your account</Typography>

      <Grid container spacing={2} style={{ marginTop: 20 }}>
        <Grid item xs={12}>
          <Button variant='contained' color='primary' fullWidth>
            Sign Up with Facebook
          </Button>
        </Grid>

        <Grid item xs={12}>
          <Button variant='contained' color='secondary' fullWidth>
            Sign Up with Google
          </Button>
        </Grid>

        {/* ... other social media login buttons */}
      </Grid>

      {/* Or */}
      <Typography variant='subtitle2' style={{ margin: "20px 0" }}>
        Or
      </Typography>

      {/* Email and Password Input */}
      <TextField label='Your Email' type='email' fullWidth required />
      <TextField
        label='Password'
        type='password'
        fullWidth
        required
        style={{ marginTop: 20 }}
      />

      {/* Forgot Password */}
      <Typography variant='body2' style={{ textAlign: "right", marginTop: 10 }}>
        Forgot Password?
      </Typography>

      {/* Log In Button */}
      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        style={{ marginTop: 20 }}>
        Log In
      </Button>

      {/* Sign Up Text */}
      <Typography
        variant='body2'
        style={{ textAlign: "center", marginTop: 10 }}>
        Don't have an account? Sign Up
      </Typography>
    </Paper>
  );
}

export default Login;
