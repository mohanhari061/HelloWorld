import React from "react";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";
import ChatList from "../specific/ChatList";
// import Header from "./Header";

const AppLayout = () => (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />

                <Grid container height={"calc(100vh - 4rem)"}>
                    <Grid
                        itemID="main"
                        size={{sm: 4, md:3}}
                        sx={{ display: { xs: "none", sm: "block" } }}
                        height={"100%"}
                        bgcolor="purple"
                    >
                        <ChatList chats={[1,2,3,4,5]}/>
                    </Grid>
                    <Grid
                        itemID="main2"
                        size={{ xs:12, sm: 8, md: 5, lg: 6}}
                        height={"100%"}
                        bgcolor="green"
                    >
                        <WrappedComponent {...props} />{" "}
                    </Grid>
                    <Grid
                        itemID="main3"
                        size={{ md:4, lg: 3 }}
                        sx={{ display: { xs: "none", md: "block" },
                            padding:"2rem" ,
                            bgcolor: "rgba(0,0,0,0.85)" 

                         }}
                        height={"100%"}
                        // bgcolor="red"
                    >
                        Side bar3
                    </Grid>
                </Grid>
            </>
        );
    };
};

export default AppLayout;
