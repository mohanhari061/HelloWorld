import {
    Dialog,
    DialogTitle,
    ListItem,
    Stack,
    Typography,
    Avatar,
    IconButton,
    Button
} from "@mui/material";
// import { Avatar, IconButton, ListItem, Stack, Typography } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import React, { memo } from "react";
import { sampleNotifications } from "../../constants/sampleData";
import { transformImage } from "../../lib/features";

const Notifications = () => {

    const friendRequestHandler = (notificationId,accept) => {
        console.log("Handle friend request for notification ID:", notificationId);
        // Implement the logic to handle friend requests here
    }
    return (
        <Dialog open={true}>
            <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
                <DialogTitle>Notifications</DialogTitle>
                {sampleNotifications.length > 0 ? (
                    sampleNotifications.map((i) => (
                        <NotificationItem
                            sender={i.sender}
                            _id={i._id}
                            handler={friendRequestHandler}
                            key={i._id}
                        />
                    ))
                ) : (
                    <Typography textAlign={"center"}>
                        0 Notifications
                    </Typography>
                )}
            </Stack>
        </Dialog>
    );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
    const {name, avatar}=sender;
    return (
        <ListItem>
            <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={"1rem"}
                width={"100%"}
            >
                <Avatar
                    src={transformImage("https://mui.com/static/images/avatar/1.jpg")}
                    alt={name}
                />

                <Typography
                    variant="body1"
                    sx={{
                        flexGrow: 1,
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width:"100%"
                    }}
                >
                    {name}
                </Typography>

                <Stack
                  direction={{
                        xs: "column",
                        sm: "row",
                    }}
                    
                >
                  <Button onClick={()=>handler({_id,accept:true})}>Accept</Button>
                  <Button color={"red"} onClick={()=>handler({_id,accept:false})}>Reject</Button>
                 
                </Stack>
            </Stack>
        </ListItem>
    );
});

export default Notifications;
