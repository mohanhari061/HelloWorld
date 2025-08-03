import React, { useState } from "react";
import {
    Avatar,
    Button,
    Container,
    IconButton,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { usernameValidator } from "../../utils/validators.js";
import { Navigate } from "react-router-dom";
import { useInputValidation } from "6pp";

const isAdmin=false;



const AdminLogin = () => {

    if(isAdmin)return <Navigate to={'/admin/dashboard'}/>
    const secretKey = useInputValidation("");

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit")
    };  

    if(isAdmin)return <Navigate to="/admin/dashboard"></Navigate>
    

    return (
        <div
            style={{
                backgroundImage:
                    "linear-gradient(rgb(255 225 209),rgb(249 159 159))",
            }}
        >
            <Container
                component={"main"}
                maxWidth="xs"
                sx={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Paper
                    elevation={3}
                    sx={{
                        padding: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    
                    <>
                        <Typography variant="h5">Admin Login</Typography>
                        <form
                            style={{
                                width: "100%",
                                marginTop: "1rem",
                            }}
                            onSubmit={submitHandler}
                        >
                            <TextField
                                required
                                fullWidth
                                label="Password"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                value={secretKey.value}
                                onChange={secretKey.changeHandler}
                            ></TextField>
                            {/* {
                                password.error && (
                                    <Typography color="error" variant="caption">
                                        {password.error}
                                    </Typography>
                                )
                            } */}
                            <Button
                                sx={{
                                    marginTop: "1rem",
                                }}
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                            >
                                Login
                            </Button>
                        </form>
                    </>
                    
                </Paper>
            </Container>
        </div>
    );
};

export default AdminLogin;
