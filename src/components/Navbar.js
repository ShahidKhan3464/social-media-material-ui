import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Notifications from '@mui/icons-material/Notifications';
import Mail from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';

const Search = styled("div")(({ theme }) => ({
    width: '40%',
    padding: '0 10px',
    background: 'white',
    borderRadius: theme.shape.borderRadius
}))

const Icons = styled(Box)(({ theme }) => ({
    gap: '20px',
    display: 'none',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))

const UserBox = styled(Box)(({ theme }) => ({
    gap: '10px',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }
}))

const Navbar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    return (
        <Box>
            <AppBar position='sticky' >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }} >
                    <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Material Ui
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Search><InputBase placeholder='Search...' /></Search>
                    <Icons>
                        <Badge badgeContent={4} color="error" >
                            <Mail />
                        </Badge>
                        <Badge badgeContent={3} color="error" >
                            <Notifications />
                        </Badge>
                        <Avatar
                            onClick={handleClick}
                            sx={{ width: 30, height: 30 }}
                            src="https://th.bing.com/th/id/R.9cdf3ba6f4f373a2c4e52dc316d40e3e?rik=du6yRw%2fq3khH0Q&pid=ImgRaw&r=0"
                        />
                    </Icons>
                    <UserBox onClick={handleClick}>
                        <Avatar sx={{ width: 30, height: 30 }} src="https://www.bing.com/images/search?view=detailV2&ccid=BkeDRoyD&id=B01E513AEEBD5E013511E8D6B28282EC920F6CAD&thid=OIP.BkeDRoyDudMqGoRTwPkpmAAAAA&mediaurl=https%3a%2f%2fpickaface.net%2fgallery%2favatar%2f.18895562d1071c344.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.064783468c83b9d32a1a8453c0f92998%3frik%3drWwPkuyCgrLW6A%26pid%3dImgRaw%26r%3d0&exph=215&expw=215&q=random+avatar&simid=608000114953563984&FORM=IRPRST&ck=2DCEF0640FB19302EE642B4C746C2009&selectedIndex=12&qpvt=random+avatar" />
                        <Typography variant='span' >John</Typography>
                    </UserBox>
                </Toolbar>
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    onClose={e => setAnchorEl(null)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <MenuItem onClick={e => setAnchorEl(null)}> Profile</MenuItem>
                    <MenuItem onClick={e => setAnchorEl(null)}>My account</MenuItem>
                    <MenuItem onClick={e => setAnchorEl(null)}>Logout</MenuItem>
                </Menu>
            </AppBar>
        </Box >
    );
}

export default Navbar;