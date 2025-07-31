import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";
import {
    Face as FaceIcon,
    AlternateEmail as UsernameIcon,
    CalendarMonth as CalendarMonthIcon,
    
} from "@mui/icons-material";

import moment from "moment";


const Profile = () => {
    return (
        <Stack spacing={"2rem"} direction={"column"} alignItems={"center"}>
            <Avatar
                sx={{
                    width: 200,
                    height: 200,
                    objectFit: "contain",
                    marginBottom: "1rem",
                    border: "5px solid white",
                }}
            />
            <ProfileCard
                heading={"Bio"}
                text={"Hello My name is Hari mohan 😎😎. I love Cats❤️"}
            ></ProfileCard>
            <ProfileCard
                heading={"Username"}
                text={"mohanhari061"}
                Icon={<UsernameIcon />}
            ></ProfileCard>
            <ProfileCard
                heading={"Name"}
                text={"Hari Mohan 😎😎"}
                Icon={<FaceIcon />}
            ></ProfileCard>
            <ProfileCard
                heading={"Joined"}
                text={moment('2025-07-26T00:00:00.000Z').fromNow()}
                Icon={<CalendarMonthIcon />}
            ></ProfileCard>
        </Stack>
    );
};

const ProfileCard = ({ text, Icon, heading }) => {
    return (
        <Stack
            direction={"row"}
            alignItems={"center"}
            spacing={"1rem"}
            color={"white"}
            textAlign={"center"}
        >
            {Icon && Icon}
            <Stack>
                <Typography variant="body1">{text}</Typography>
                <Typography variant="caption" color={"gray"}>
                    {heading}
                </Typography>
            </Stack>
        </Stack>
    );
};

export default Profile;
