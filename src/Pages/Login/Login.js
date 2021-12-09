import { Grid } from '@mui/material';
import React from 'react';
import './Login.scss';

const Login = () => {
    return (
        <div className="login">
           <Grid container >
                <Grid md={12} sm={12}>
                    <div className="login-content">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                      Ready to watch? Enter your email to create or restart your membership.
                    </p>
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="email" placeholder="Password" />
                        <input type="submit" value="Login" />
                    </form>
                    </div>
                </Grid>
           </Grid>
        </div>
    );
};

export default Login;