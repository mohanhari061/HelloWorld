export const sampleChats = [
	{
		avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
		name: "mohanhari061",
		_id: "1",
		groupChat: true,
		members: ["1", "2"],
	},
	{
		avatar: [
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
		],
		name: "dev.mohanhari061",
		_id: "2",
		groupChat: true,
		members: ["1", "2"],
	},
	{
		avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
		name: "mohanhari061",
		_id: "3",
		groupChat: true,
		members: ["1", "2"],
	},
	{
		avatar: [
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
		],
		name: "dev.mohanhari061",
		_id: "4",
		groupChat: true,
		members: ["1", "2"],
	},
	{
		avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
		name: "mohanhari061",
		_id: "5",
		groupChat: true,
		members: ["1", "2"],
	},
	{
		avatar: [
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
		],
		name: "dev.mohanhari061",
		_id: "6",
		groupChat: true,
		members: ["1", "2"],
	},
	{
		avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
		name: "mohanhari061",
		_id: "7",
		groupChat: true,
		members: ["1", "2"],
	},
	{
		avatar: [
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
			"https://www.w3schools.com/howto/img_avatar.png",
		],
		name: "dev.mohanhari061",
		_id: "8",
		groupChat: true,
		members: ["1", "2"],
	},
];

export const sampleUsers = [
	{
		avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
		name: "mohanhari061",
		_id: "1",
	},
	{
		avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
		name: "dev.mohanhari061",
		_id: "2",
	},
];
export const sampleNotifications = [
	{
		sender: {
			avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
			name: "mohanhari061",
		},
		_id: "1",
	},
	{
		sender: {
			avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
			name: "dev.mohanhari061",
		},
		_id: "2",
	},
];

export const sampleMessage = [
	{
		attachments: [
			{
				public_id: "asdfghjk",
				url: "https://www.w3schools.com/howto/img_avatar.png",
			},
		],
		content: "hari ka message hai",
		sender: {
			_id: "qwertyuiop",
			name: "Chaman",
		},
		chat: "chatId",
		createdAt: "2025-07-12T10:41:30.630Z",
	},
	{
		attachments: [
			{
				public_id: "asdfghjk2",
				url: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
			},
		],
		content: "hari2 ka message hai",
		sender: {
			_id: "dDASFaFcadgfSDASG",
			name: "Tamnaaaaaa",
		},
		chat: "chatId2",
		createdAt: "2025-07-31T10:41:30.630Z",
	},
];

export const sampleDashboardData = {
	users: [
		{
			avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
			name: "mohanhari061",
			_id: "1",
			username: "mohanhari061",
			friends: 20,
			groups: 5,
		},
		{
			avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
			name: "dev.mohanhari061",
			_id: "2",
			username: "dev.mohanhari061",
			friends: 69,
			groups: 96,
		},
	],
	chats: [
		{
			name: "timepass inc",
			avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
			_id: "1",
			groupChat: true,
			totalMembers: 2,
			totalMessages: 20,
			members: [
				{ _id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
				{ _id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png" },
			],
			creator: {
				avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
				name: "mohanhari061",
			},
		},
	],
	messages:[
		{
			attachments:[{
				public_id:"heheheh",
				url:"https://www.w3schools.com/howto/img_avatar.png"
			}],
			content:"hey its hari mohan",
			_id:"qwertyuiop",
			sender:{
				_id: "1",
				name: "mohanhari061",
				avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
			},
			chat:"chatId",
			groupChat:false,
			createdAt:"2025-02-12T10:41:30.630Z"
		}
	]
};
