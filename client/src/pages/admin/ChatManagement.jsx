import React, { useEffect, useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";
import Table from "../../components/shared/Table";
import { Avatar, Stack } from "@mui/material";
import AvatarCard from "../../components/shared/AvatarCard";
import { transformImage } from "../../lib/features";
import { sampleDashboardData } from "../../constants/sampleData";

const columns = [
	{
		field: "id",
		headerName: "ID",
		headerClassName: "table-header",
		width: 200,
	},
	{
		field: "avatar",
		headerName: "Avatar",
		headerClassName: "table-header",
		width: 150,
		renderCell: (params) => (
			<AvatarCard avatar={params.row.avatar}  />
		),
	},
	{
		field: "name",
		headerName: "Name",
		headerClassName: "table-header",
		width: 200,
	},
	{
		field: "totalMembers",
		headerName: "Total Members",
		headerClassName: "table-header",
		width: 200,
	},
	{
		field: "members",
		headerName: "Members",
		headerClassName: "table-header",
		width: 400,
		renderCell: (params) => (
			<AvatarCard max={100} avatar={params.row.members} />
		),
	},
	{
		field: "totalMessages",
		headerName: "Total Messages",
		headerClassName: "table-header",
		width: 120,
	},
	{
		field: "creator",
		headerName: "Created By",
		headerClassName: "table-header",
		width: 250,
		renderCell: (params) => (
			<Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
				<Avatar src={params.row.creator.avatar} alt={params.row.creator.name} />
				<span>{params.row.creator.name}</span>
			</Stack>
		),
	},
];

const ChatManagement = () => {
	const [rows, setRows] = useState([]);

    useEffect(() => {
        
        setRows(sampleDashboardData.chats.map((i)=>(
            {
                ...i,
                id:i._id,
                avatar:i.avatar.map(i=>(transformImage(i,50))),           
                members:i.members.map(i=>(transformImage(i.avatar,50))),
                creator:{
                    name:creator.name,
                    avatar:transformImage(i.creator.avatar,50)
                }
            }
        )))
        
    }, [])
    

	return (
		<AdminLayout>
			<Table heading={"All Chats"} columns={columns} rows={rows} />
		</AdminLayout>
	);
};

export default ChatManagement;
