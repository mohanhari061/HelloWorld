import React, { lazy, memo, Suspense, useEffect, useState } from "react";
import {
    Backdrop,
    Box,
    Button,
    Drawer,
    Grid,
    IconButton,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import {
    Add as AddIcon,
    Delete as DeleteIcon,
    Done as DoneIcon,
    Edit as EditIcon,
    KeyboardBackspace as KeyboardBackspaceIcon,
    Menu as MenuIcon,
} from "@mui/icons-material";
import { bgGradient, matBlack } from "../constants/color";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Link } from "../components/styles/StyledComponents";
import AvatarCard from "../components/shared/AvatarCard";
import { sampleChats, sampleUsers } from "../constants/sampleData";
import UserItem from "../components/shared/UserItem";
const ConfirmDeleteDialog = lazy(() =>
    import("../components/dialogs/ConfirmDeleteDialog")
);
const AddMemberDialog = lazy(() =>
    import("../components/dialogs/AddMemberDialog")
);

const isAddMember = false;

const Groups = () => {
    const chatId = useSearchParams()[0].get("group");
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [groupName, setGroupName] = useState("");
    const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState("");

    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

    // console.log(chatId);

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
    const updateGroupName = () => {
        setIsEdit(false);
        console.log("GroupName updated ", groupNameUpdatedValue);
    };

    const openConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(true);
        console.log("openConfirmDeleteHandler", confirmDeleteDialog);
    };
    const closeConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(false);
        console.log("closeConfirmDeleteHandler");
    };
    const openAddMembersHandler = () => {
        console.log("openAddMembersHandler");
    };

    const deleteHandler = () => {
        console.log("deleteHandler");
    };
    const removeMemberHandler = (id) => {
        console.log("removeMemberHandler ", id);
    };
    useEffect(() => {
        if (chatId) {
            setGroupName(`Group Name ${chatId}`);
            setGroupNameUpdatedValue(`Group Name ${chatId}`);
        }
        console.log("Group Name updated Value ", groupNameUpdatedValue);

        return () => {
            setGroupName("");
            setGroupNameUpdatedValue("");
            setIsEdit(false);
        };
    }, [chatId]);

    // console.log(isEdit)
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

    const GroupName = (
        <Stack
            direction={"row"}
            alignContent={"center"}
            justifyContent={"center"}
            spacing={"1rem"}
            padding={"3rem"}
        >
            {isEdit ? (
                <>
                    <TextField
                        value={groupNameUpdatedValue}
                        onChange={(e) =>
                            setGroupNameUpdatedValue(e.target.value)
                        }
                    />
                    <IconButton onClick={updateGroupName}>
                        <DoneIcon />
                    </IconButton>
                </>
            ) : (
                <>
                    <Typography variant="h4">{groupName}</Typography>
                    <IconButton
                        onClick={() => {
                            setIsEdit(true);
                        }}
                    >
                        <EditIcon />
                    </IconButton>
                </>
            )}
        </Stack>
    );

    const ButtonGroup = (
        <Stack
            direction={{
                sm: "row",
                xs: "column-reverse",
            }}
            p={{
                xs: "0",
                sm: "1rem",
                md: "1rem 4rem",
            }}
            spacing={"1rem"}
        >
            <Button
                size="large"
                color="error"
                variant="outlined"
                startIcon={<DeleteIcon />}
                onClick={openConfirmDeleteHandler}
            >
                Delete Group
            </Button>
            <Button
                size="large"
                variant="contained"
                startIcon={<AddIcon />}
                onClick={openAddMembersHandler}
            >
                Add members
            </Button>
        </Stack>
    );
    return (
        <Grid container height={"100vh"}>
            <Grid
                sx={{
                    display: {
                        xs: "none",
                        sm: "block",
                    },
                    backgroundImage:bgGradient,
                    overflow:"auto"
                }}
                size={{ sm: 4 }}
                // bgcolor={"bisque"}
            >
                <GroupsList myGroups={sampleChats} chatId={chatId} />
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

                {groupName && (
                    <>
                        {GroupName}
                        <Typography
                            margin={"2rem"}
                            alignSelf={"flex-start"}
                            variant="body1"
                        >
                            Members
                        </Typography>
                        <Stack
                            maxWidth={"45rem"}
                            width={"100%"}
                            boxSizing={"border-box"}
                            padding={{
                                sm: "1rem",
                                xs: "0",
                                md: "1rem 4rem",
                            }}
                            spacing={"2rem"}
                            // bgcolor={"bisque"}
                            height={"50vh"}
                            overflow={"auto"}
                        >
                            {sampleUsers.map((i) => (
                                <UserItem
                                    user={i}
                                    isAdded
                                    styling={{
                                        boxShadow: "0 0 0.5rem rgba(0,0,0,0.2)",
                                        padding: "1rem 2rem",
                                        borderRadius: "1rem",
                                    }}
                                    handler={removeMemberHandler}
                                />
                            ))}
                        </Stack>
                        {ButtonGroup}
                    </>
                )}
            </Grid>

            {isAddMember && (
                <Suspense fallback={<Backdrop open />}>
                    <AddMemberDialog />
                </Suspense>
            )}

            {confirmDeleteDialog && (
                <Suspense fallback={<Backdrop open />}>
                    <ConfirmDeleteDialog
                        open={confirmDeleteDialog}
                        handleClose={closeConfirmDeleteHandler}
                        deleteHandler={deleteHandler}
                    />
                </Suspense>
            )}

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
                <GroupsList w="50vw" myGroups={sampleChats} chatId={chatId} />
            </Drawer>
        </Grid>
    );
};

const GroupsListItem = memo(({ group, chatId }) => {
    const { name, avatar, _id } = group;
    return (
        <Link
            to={`?group=${_id}`}
            onClick={(e) => {
                if (chatId === _id) e.preventDefault();
            }}
        >
            <Stack
                direction={"row"}
                gap={2}
                alignItems={"center"}
                spacing={"1rem"}
            >
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>
        </Link>
    );
});
const GroupsList = ({ w = "100%", myGroups = [], chatId }) => {
    return (
        <Stack
            width={w}
            sx={{
                height: "100vh",
                backgroundImage: bgGradient,
            }}
        >
            {myGroups.length > 0 ? (
                myGroups.map((group) => (
                    <GroupsListItem
                        group={group}
                        chatId={chatId}
                        key={group._id}
                    />
                ))
            ) : (
                <Typography textAlign={"center"} padding={"1rem"}>
                    No Groups
                </Typography>
            )}
        </Stack>
    );
};

export default Groups;
