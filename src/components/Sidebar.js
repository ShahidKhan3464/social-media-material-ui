import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import Group from '@mui/icons-material/Group';
import AccountBox from '@mui/icons-material/AccountBox';

const Sidebar = () => {

    return (
        <Box
            p={2}
            flex={1}
            sx={{ display: { xs: 'none', sm: 'block' } }}
        >
            <Box position='fixed'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#home" >
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Homepage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#home" >
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#home" >
                            <ListItemIcon>
                                <Group />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#home" >
                            <ListItemIcon>
                                <Settings />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a' href="#home" >
                            <ListItemIcon>
                                <AccountBox />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Sidebar