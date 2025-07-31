import React, { memo, useState } from "react";
import {
    Box,
    Drawer,
    Grid,
    IconButton,
    Stack,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    KeyboardBackspace as KeyboardBackspaceIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import { matBlack } from "../constants/color";
import { useNavigate } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats } from "../constants/sampleData";

const Groups = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigateBack = () => {
        console.log("Navigate back clicked");
        navigate("/");
    };
    const handleMobile = () => {
        setIsMobileMenuOpen((prev) => !prev);
        console.log("Mobile menu toggled", isMobileMenuOpen);
    };
    const handleMobileClose = () => {
        setIsMobileMenuOpen(false);
        console.log("Mobile menu Closed", isMobileMenuOpen);
    };

    const IconBtns = (
        <>
            <Box
                sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                        position: "fixed",
                        top: "1rem",
                        right: "1rem",
                    },
                }}
            >
                <IconButton onClick={handleMobile}>
                    <MenuIcon></MenuIcon>
                </IconButton>
            </Box>

            <Tooltip title="back">
                <IconButton
                    sx={{
                        position: "absolute",
                        top: "2rem",
                        left: "2rem",
                        bgcolor: matBlack,
                        "&:hover": {
                            bgcolor: "gray",
                        },
                        color: "white",
                    }}
                    onClick={navigateBack}
                >
                    <KeyboardBackspaceIcon />
                </IconButton>
            </Tooltip>
        </>
    );
    return (
        <Grid container height={"100vh"}>
            <Grid
                sx={{
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                }}
                size={{ sm: 4 }}
                bgcolor={"bisque"}
            >
                <GroupsList myGroups={sampleChats} />
            </Grid>
            <Grid
                size={{ xs: 12, sm: 8 }}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                    padding: "1rem 3rem",
                }}
            >
                {/* <p>This is the Groups page where you can manage your groups.</p> */}
                {IconBtns}
            </Grid>

            <Drawer
                sx={{
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                }}
                open={isMobileMenuOpen}
                onClose={handleMobile}
            >
                <GroupsList />
            </Drawer>
        </Grid>
    );
};

const GroupsListItem = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group;
    return (
        <Link>
            <Stack>
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    );
});
const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
    <Stack>
        {myGroups.length > 0 ? (
            myGroups.map((group) => (
                <GroupsListItem group={group} chatId={chatId} key={group._id} />
            ))
        ) : (
            <Typography textAlign={"center"} padding={"1rem"}>
                No Groups
            </Typography>
        )}
    </Stack>;
};

export default Groups;
