import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material'

function Navbar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Typography variant='h5' component={'div'}>Avinash</Typography>

            </Toolbar>

        </AppBar>

    )
}

export default Navbar