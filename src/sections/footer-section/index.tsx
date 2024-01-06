import React from 'react'
import { Box, Typography } from '@mui/material'

export const FooterSection = () => {
    return <Box paddingX={3} paddingY={3} style={{ background: '#1e1e37' }}>
        <Typography fontSize='1.1rem' align='center'>Developed by <a href='https://www.linkedin.com/in/angga-ginanjar/' style={{ textDecoration: 'none', color: '#E9FCFF' }} className='molde-condensed-bold-italic'>supermenkw</a></Typography>
    </Box>
}