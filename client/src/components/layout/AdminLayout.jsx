import {
	Close as CloseIcon,
	Dashboard as DashboardIcon,
	ExitToApp as ExitToAppIcon,
	Group as GroupIcon,
	ManageAccounts as ManageAccountsIcon,
	Menu as MenuIcon,
	Message as MessageIcon,
} from "@mui/icons-material";
import {
	Box,
	Drawer,
	Grid,
	IconButton,
	Stack,
	styled,
	Typography,
} from "@mui/material";
import { useState } from "react";
import { Link as LinkComponent, Navigate } from "react-router-dom";
import { grayColor, matBlack } from "../../constants/color";

const Link = styled(LinkComponent)`
    text-decoration: none;
    border-radius: 2rem;
    padding: 1rem 2rem;
    color: black;
    &:hover {
        color: rgba(0, 0, 0, 0.54);
    }
`;

const adminTabs = [
    {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <DashboardIcon />,
    },
    {
        name: "Users",
        path: "/admin/users",
        icon: <ManageAccountsIcon />,
    },
    {
        name: "Chats",
        path: "/admin/chats",
        icon: <GroupIcon />,
    },
    {
        name: "Messages",
        path: "/admin/messages",
        icon: <MessageIcon />,
    },
];

const SideBar = ({ w = "100%" }) => {
    const logoutHandler = () => {
        console.log("logoutHandler");
    };
    return (
        <Stack width={w} direction={"column"} p={"3rem"} spacing={"3rem"}>
            <Typography variant="h5" textTransform={"uppercase"}>
                HelloWorld
            </Typography>

            <Stack spacing={"1rem"}>
                {adminTabs.map((tab, index) => (
                    <Link
                        key={tab.path}
                        to={tab.path}
                        sx={
                            location.pathname === tab.path && {
                                bgcolor: matBlack,
                                color: "white",
                                ":hover": {
                                    color: "white",
                                },
                            }
                        }
                    >
                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={"1rem"}
                        >
                            {tab.icon}
                            <Typography fontSize={"1.2rem"}>{tab.name}</Typography>
                        </Stack>
                    </Link>
                ))}
                <Link onClick={logoutHandler}>
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={"1rem"}
                    >
                        <ExitToAppIcon />
                        <Typography fontSize={"1.2rem"}>Logout</Typography>
                    </Stack>
                </Link>
            </Stack>
        </Stack>
    );
};

const isAdmin=true;

const AdminLayout = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false);

    const handleMobile = () => {
        setIsMobile(!isMobile);
        console.log("handleMobile");
    };
    const handleClose = () => {
        setIsMobile(!isMobile);
        console.log("handleClose");
    };

	if(!isAdmin)return <Navigate to={'/admin'}/>
    return (
        <Grid container minHeight={"100vh"}>
            <Box
                sx={{
                    display: {
                        xs: "block",
                        md: "none",
                    },
                    position: "fixed",
                    right: "1rem",
                    top: "1rem",
                }}
            >
                <IconButton onClick={handleMobile}>
                    {isMobile ? <CloseIcon></CloseIcon> : <MenuIcon></MenuIcon>}
                </IconButton>
            </Box>
            <Grid
                size={{
                    md: 4,
                    lg: 3,
                }}
                sx={{
                    display: { xs: "none", md: "block" },
                }}
            >
                <SideBar />
            </Grid>
            <Grid
                size={{
                    xs: 12,
                    md: 8,
                    lg: 9,
                }}
                sx={{
                    bgcolor: grayColor,
                }}
            >
                {children}
            </Grid>

            <Drawer open={isMobile} onClose={handleClose}>
                <SideBar w="50vw" />
            </Drawer>
        </Grid>
    );
};

export default AdminLayout;
