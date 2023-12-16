import { Typography } from '@mui/material';
import Box from '@mui/system/Box';


export const Footer = () => {

    return (
        <Box bgcolor="#4a6072" sx={{ height: "25vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Box
                component="img"
                alt="logo"
                src="meethub_logo_white.png"
                sx={{
                    height: "58%",
                    width: "21%",
                }}
            />
            <Typography color="white" variant='h10'>
                Wszelkie prawa zastrzeżone
            </Typography>
        </Box>
    );
}