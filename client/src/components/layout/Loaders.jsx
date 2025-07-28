import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

export const LayoutLoaders = () => {
    return (
        <Grid container height={"calc(100vh - 4rem)" } spacing={"1rem"}>
            <Grid
                itemID="main"
                size={{ sm: 4, md: 3 }}
                sx={{ display: { xs: "none", sm: "block" } }}
                height={"100%"}
                // bgcolor="purple"
            >
                <Skeleton variant="rectangular" height={"100vh"}/>
            </Grid>
            <Grid
                itemID="main2"
                size={{ xs: 12, sm: 8, md: 5, lg: 6 }}
                height={"100%"}
                // bgcolor="green"
            >
                <Stack spacing={"1rem"}>
                    {
                        Array.from({ length: 12}).map((_, index) => (
                            <Skeleton key={index} variant="rectangular" height={"5rem"} />))
                    }

                </Stack>
            </Grid>
            <Grid
                itemID="main3"
                size={{ md: 4, lg: 3 }}
                sx={{
                    display: { xs: "none", md: "block" }
                }}
                height={"100%"}
                // bgcolor="red"
            >
                <Skeleton variant="rectangular" height={"100vh"}/>
            </Grid>
        </Grid>
    );
};
