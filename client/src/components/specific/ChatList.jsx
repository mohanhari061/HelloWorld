import { Stack } from '@mui/material';
import React from 'react'
import ChatItem from '../shared/ChatItem';

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
            chats?.map((data,index)=>{
                const { avatar, name, _id, groupChat, members } = data;
                const newMessageAlert = newMessageAlert.find(({chatId} )=> chatId === _id);
                const isOnline = onlineUsers.some((user) => members.includes(user._id));
                const sameSender = index > 0 && chats[index - 1]._id === _
                return <ChatItem newMessageAlert={newMessageAlert} />
            })
        }
    </Stack>;
};

export default ChatList
