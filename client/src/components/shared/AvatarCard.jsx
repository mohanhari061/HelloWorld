import {Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/features";

// to do transform
const AvatarCard = ({ avatar = [], max = 4 }) => {
    return (
        <Stack direction={"row"} spacing={0.5} alignItems="center">
            <AvatarGroup max={max}>
                <Box width={"5rem"} height={"5rem"}>
                    {avatar.map((i, index) => (
                        <Avatar 
                            key={Math.random() * 100}
                            src={transformImage(i)}
                            alt={`Avatar ${index}`}
                            style={{
                                width: "3rem",
                                height: "3rem",
                                position: "absolute",
                                left: {
                                    xs: `${index + 0.5}rem`,
                                    sm: `${index}rem`,
                                },
                            }}
                        />
                    ))}
                </Box>
            </AvatarGroup>
        </Stack>
    );
};

export default AvatarCard;
