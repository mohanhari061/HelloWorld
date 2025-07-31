import {
    Button,
    Dialog,
    DialogTitle,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from "react";

import { useInputValidation } from "6pp";
import { sampleUsers } from "../../constants/sampleData";
import UserItem from "../shared/UserItem";

const NewGroup = () => {
    const groupName = useInputValidation("");

    const [members, setMembers] = useState(sampleUsers);
    const [selectedMembers, setSelectedMembers] = useState([]);

    const closeDialogHandler = () => {
        console.log("Dialog closed");
    };
    const submitDialogHandler = () => {
        console.log("Dialog submit");
    };

    const selectMemberHandler = (userId) => {
        setSelectedMembers((prev) =>
            prev.includes(userId)
                ? prev.filter((currEle) => currEle !== userId)
                : [...prev, userId]
        );
        console.log("Selected member with ID:", selectedMembers);
    };

    const submitGroupHandler = () => {
        console.log("Group created with name:", groupName.value);
        // Implement the logic to create a new group here
    };

    return (
        <Dialog open={true}>
            <Stack p={{ xs: "1rem", sm: "2rem" }} maxWidth={"25rem"}>
                <DialogTitle textAlign={"center"} variant="h4">
                    New Group
                </DialogTitle>
                <TextField
                    label={"Group Name"}
                    value={groupName.value}
                    onChange={groupName.changeHandler}
                />

                <Typography variant="body1">Members</Typography>
                <Stack>
                    {members.map((user) => (
                        <UserItem
                            user={user}
                            key={user._id}
                            handler={selectMemberHandler}
                            isAdded={selectedMembers.includes(user._id)}
                        ></UserItem>
                    ))}
                </Stack>

                <Stack
                    direction={"row}"}
                    justifyContent={"space-between"}
                    mt={2}
                >
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => console.log("Cancel")}
                        size="large"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={submitGroupHandler}
                    >
                        Create Group
                    </Button>
                </Stack>
            </Stack>
        </Dialog>
    );
};

export default NewGroup;
