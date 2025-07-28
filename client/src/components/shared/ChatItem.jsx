import React from 'react'
import { Link } from '../styles/StyledComponents'
import { Stack, Typography } from '@mui/material'




const ChatItem = ({
    avatar=[],
    name,
    _id,
    groupChat=false,
    sameSender,
    isOnline,
    newMessageAlert,
    index=0,
    handleDeleteChatOpen
}) => {
  return (
    <Link to={`/chat/${_id}`}>
        <div style={{
            display:"flex",
            alignItems:"center",
            padding:"1rem",
            backgroundColor:newMessage?"black":"unset",
            color:sameSender?"white":"unset",
            borderBottom: "1px solid #f0f0f0",
            position:"relative"

        }}>
            {/* Avatar Card */}

            <Stack>
                <Typography>
                    {name}
                </Typography>
                {
                    newMessageAlert && (
                        <Typography>
                            {newMessageAlert.count} New Message
                        </Typography>
                    )
                }
            </Stack>
            link
        </div>
    </Link>
  )
}

export default ChatItem
