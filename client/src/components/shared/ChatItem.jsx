import React, { memo } from "react";
import { Link } from "../styles/StyledComponents";
import { Box, Stack, Typography } from "@mui/material";

const ChatItem = ({
    avatar = [],
    name,
    _id,
    groupChat = false,
    sameSender,
    isOnline,
    newMessageAlert,
    index = 0,
    handleDeleteChatOpen,
}) => {
    return (
        <Link
            to={`/chat/${_id}`}
            oncontextmenu={(e) => {
                handleDeleteChatOpen(e, _id, groupChat);
            }}
        >
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "1rem",
                    backgroundColor: newMessage ? "black" : "unset",
                    color: sameSender ? "white" : "unset",
                    borderBottom: "1px solid #f0f0f0",
                    position: "relative",
                }}
            >
                {/* Avatar Card */}
                <Stack>
                    <Typography>{name}</Typography>
                    {newMessageAlert && (
                        <Typography>
                            {newMessageAlert.count} New Message
                        </Typography>
                    )}
                </Stack>
                {isOnline && (
                    <Box
                        sx={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: "green",
                            position: "absolute",
                            top: "50%",
                            right: "1rem",
                            transform: "translateY(-50%)",
                        }}
                    ></Box>
                )}
                link
            </div>
        </Link>
    );
};

export default memo(ChatItem);
