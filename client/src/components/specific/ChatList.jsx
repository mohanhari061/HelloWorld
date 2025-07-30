import { Stack } from '@mui/material';
import React from 'react'

const ChatList = ({
    w = "100%",
    chats = [],
    chatid,
    onlineUsers = [],
    newMessageAlert = [
        {
            chatId: "",
            count: 0,
        },
    ],
    handleDeleteChat
}) => {

    return <Stack width={w} direction={"column"}>
        {
            chats?.map((data, index) => {
                const {avatar, _id, name, groupChat,members } = data;

                // const newMessageAlert = newMessageAlert.find(({chatId}) => chatId === _id);
                // const isOnline =members?.some(member => onlineUsers.includes(member._id));

                return <ChatItem newMessageAlert={newMessageAlert}/>;
            })
        }
    </Stack>;
};

export default ChatList
