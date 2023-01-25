import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from 'react';
import { ColorModeContext, tokens } from '../../theme';
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlineIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchIcon from '@mui/icons-material/Search';




const Topbar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
//Box element is from mui and acts like a div except css can be written directly into the element as an attribute
    return (
        <Box display='flex' justifyContent='space-between' p={2} >
            {/* SEARCH BAR */}
            <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px" >
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder='Search' />
                <IconButton type="button" sx={{ p: 1 }} >
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICONS */}
            <Box display="flex"  >
                <IconButton onClick={colorMode.toggleColorMode} >
                    {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon /> : <DarkModeOutlineIcon />}
                </IconButton>
                <IconButton><NotificationsOutlinedIcon /></IconButton>
                <IconButton><SettingsOutlinedIcon /></IconButton>
                <IconButton><PersonOutlinedIcon /></IconButton>
            </Box>
        </Box>
    )
}
export default Topbar;