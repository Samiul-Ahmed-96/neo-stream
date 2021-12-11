import { Grid } from '@mui/material';
import React from 'react';
import "./Register.scss";

const Register = () => {
    return (
        <div className="register">
           <Grid container >
                <Grid md={12} sm={12}>
                    <div className="login-content">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                      Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Register" />
                    </form>
                    </div>
                </Grid>
           </Grid>
        </div>
    );
};

export default Register;