import { TryCatch } from "../middlewares/error.middleware.js";
import { ErrorHandler } from "../utils/utility.js";
import Chat from "../models/chat.model.js";
import { emitEvent } from "../utils/features.js";
import { ALERT, REFETCH_CHATS } from "../constants/event.js";
import mongoose from "mongoose";
import { getOtherMember } from "../lib/helper.js";
import User from "../models/user.model.js";

export const newGroupChat = TryCatch(async (req, res, next) => {
    const { name, members } = req.body;

    if (members.length < 2)
        return next(
            new ErrorHandler("Group chat must have at least 3 members", 400)
        );

    const allMembers = [...members, req.userId].map((id) => {
        if (!mongoose.Types.ObjectId.isValid(id))
            return res
                .status(404)
                .json({ success: false, message: "Invalid user id" });
        return new mongoose.Types.ObjectId.createFromHexString(id);
    });

    const chat = await Chat.create({
        name,
        groupChat: true,
        creator: req.userId,
        members: allMembers,
    });

    emitEvent(req, ALERT, allMembers, `Welcome to ${name} group`);
    emitEvent(req, REFETCH_CHATS, members, `refetch chat event`);

    return res
        .status(201)
        .json({ success: true, message: "Group chat created successfully" });
});

export const getMyChats = TryCatch(async (req, res, next) => {
    const chats = await Chat.find({ members: req.userId }).populate(
        "members",
        "name avatar"
    );

    const trasformedChats = chats.map(({ _id, name, groupChat, members }) => {
        const otherMember = getOtherMember(members, req.userId);
        return {
            _id,
            groupChat,
            avatar: groupChat
                ? members.slice(0, 3).map(({ avatar }) => avatar.url)
                : [otherMember.avatar.url],
            name: groupChat ? name : otherMember.name,
            members: members.reduce((prev, curr) => {
                if (curr._id.toString() !== req.userId.toString()) {
                    prev.push(curr._id);
                }
                return prev;
            }, []),
        };
    });

    return res.status(201).json({
        success: true,
        message: "Getting chats successfully",
        chats: trasformedChats,
    });
});

export const getMyGroups = TryCatch(async (req, res, next) => {
    const chats = await Chat.find({
        members: req.userId,
        groupChat: true,
        creator: req.userId,
    }).populate("members", "name avatar");

    const groupChats = chats.map(({ _id, name, groupChat, members }) => {
        return {
            _id,
            groupChat,
            name,
            avatar: members.slice(0, 3).map(({ avatar }) => avatar.url),
        };
    });

    return res.status(201).json({
        success: true,
        message: "Getting Groupchats successfully",
        chats: groupChats,
    });
});

export const addMembers = TryCatch(async (req, res, next) => {
    const { chatId, members } = req.body;

    if (!members || members.length < 1)
        return next(new ErrorHandler("Please provide members", 404));

    const chat = await Chat.findById(chatId);

    if (!chat) return next(new ErrorHandler("Chat not found", 404));
    if (!chat.groupChat)
        return next(new ErrorHandler("This is not a group chat", 404));

    if (chat.creator.toString() !== req.userId.toString())
        return next(
            new ErrorHandler("You are not allowed to add members", 403)
        );

    const allNewMembersPromise = members.map((i) => {
        return User.findById(i, "name");
    });
    const allNewMembers = await Promise.all(allNewMembersPromise);

    const uniqueMembers = allNewMembers
        .filter((i) => !chat.members.includes(i._id.toString()))
        .map((i) => i._id);

    chat.members.push(...uniqueMembers);

    if (chat.members.length > 100)
        return next(new ErrorHandler("Group members limit reached", 400));

    await chat.save();

    const allUsersName = allNewMembers.map((i) => i.name).join(", ");

    emitEvent(req, ALERT, chat.members, `New members joined: ${allUsersName}`);
    emitEvent(req, REFETCH_CHATS, chat.members, `refetch chat event`);

    return res.status(201).json({
        success: true,
        message: "Members added succefully",
    });
});

export const removeMembers = TryCatch(async (req, res, next) => {
    const { userId, chatId } = req.body;

    if (!userId) return next(new ErrorHandler("Please provide userId", 404));

    const [chat, userThatWillBeRemoved] = await Promise.all([
        Chat.findById(chatId),
        User.findById(userId, "name"),
    ]);

    if (!chat) return next(new ErrorHandler("Chat not found", 404));
    if (!chat.groupChat)
        return next(new ErrorHandler("This is not a group chat", 404));

    if (chat.creator.toString() !== req.userId.toString())
        return next(
            new ErrorHandler("You are not allowed to remove members", 403)
        );

    if (chat.members.length <= 3)
        return next(
            new ErrorHandler("Group must have atleast 3 members ", 400)
        );

    chat.members = chat.members.filter(
        (i) => i.toString() !== userId.toString()
    );

    await chat.save();

    emitEvent(
        req,
        ALERT,
        chat.members,
        `One member removed: ${userThatWillBeRemoved.name}`
    );
    emitEvent(req, REFETCH_CHATS, chat.members, `refetch chat event`);

    return res.status(201).json({
        success: true,
        message: "Members removed succefully",
    });
});

export const leaveGroup = TryCatch(async (req, res, next) => {
    const chatId = req.params.id;
    const userId = req.userId;

    if (!userId) return next(new ErrorHandler("Please provide userId", 404));

    const [chat, userThatWillBeRemoved] = await Promise.all([
        Chat.findById(chatId),
        User.findById(userId, "name"),
    ]);

    if (!chat) return next(new ErrorHandler("Chat not found", 404));
    if (!chat.groupChat)
        return next(new ErrorHandler("This is not group chat", 400));

    const randomIndex = Math.floor(Math.random() * chat.members.length);

    const remainingMembers = chat.members.filter(
        (i) => i.toString() !== userId.toString()
    );

    if (remainingMembers.length < 3)
        return next(
            new ErrorHandler("Group must have atleast 3 members ", 400)
        );

    if (chat.creator.toString() == userId.toString()) {
        const newCreator = remainingMembers[randomIndex];
        chat.creator = newCreator;
    }

    chat.members = remainingMembers;

    await chat.save();

    emitEvent(
        req,
        ALERT,
        chat.members,
        `User : ${userThatWillBeRemoved.name} left the group`
    );

    return res.status(201).json({
        success: true,
        message: "Members removed succefully",
    });
});


