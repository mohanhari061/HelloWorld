import {
    Dialog,
    DialogTitle,
    List,
    ListItem,
    ListItemText,
    Stack,
    TextField,
} from "@mui/material";
import React from "react";
import { useInputValidation } from "6pp";
import { Search as SearchIcon } from "@mui/icons-material";
import UserItem from "../shared/UserItem";
import { sampleUsers } from "../../constants/sampleData";
import { useState } from "react";

const users = [1, 2, 3, 4, 5];

const Search = () => {
    const search = useInputValidation("");
    const [users, setUsers] = useState(sampleUsers)
    

    let isLoadingSendFriendRequest = false; 
    


    const addFreindHandler = (userId) => {
        console.log("Add friend with ID:", userId);
        
    }
    

    return (
        <Dialog open={true}>
            <Stack p={"2rem"} direction={"column"} width="25rem">
                <DialogTitle textAlign={"center"}>Find people</DialogTitle>
                {/* <SearchIcon/> */}
                <TextField
                    label="Search"
                    value={search.value}
                    onChange={search.changeHandler}
                    variant="outlined"
                    size="small"
                ></TextField>

                <List>
                    {users.map((user) => (
                        <UserItem
                            user={user}
                            key={user._id}
                            handler={addFreindHandler}
                            handlerIsloading={isLoadingSendFriendRequest}
                        ></UserItem>
                    ))}
                </List>
            </Stack>
        </Dialog>
    );
};

export default Search;
