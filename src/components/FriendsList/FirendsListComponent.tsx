import { Box, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { ReactElement, useEffect, useState } from "react";
import { FriendListEntry, getFriendsList } from "../../services/FriendsService";


export const FriendsListComponent = () => {

    const [friendsList, setFriendsList] = useState([]);

    useEffect(() => {
        getFriendsList()
            .then((r) => setFriendsList(r))
    }, []);


    return (
        <Box>
            
        </Box>
    )
}