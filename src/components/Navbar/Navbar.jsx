import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Box, Stack, Button, Drawer } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (

        <AppBar position='static'>

            <Stack sx={
                {
                    justifyContent: 'space-between',
                    p: 1,
                }
            }
                direction='row'

            >
                <Stack display={'flex'} alignContent='center' justifyContent={'center'} >
                    <IconButton color='inherit'>
                        <Typography variant='h5'
                            component={'div'}
                            ml={3}
                        >
                            Avinash
                        </Typography>
                    </IconButton>
                </Stack>
                <Box

                    sx={
                        {
                            display: {
                                xs: 'none',
                                sm: 'flex',


                            },


                        }
                    }
                    gap={7}>
                    <Button color='inherit' >Home</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Projects</Button>
                    <Button color='inherit'>Contact Me</Button>
                </Box>
                <Box sx={{
                    display: {
                        xs: 'flex',
                        sm: 'none'
                    }

                }}>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        onClick={() => {
                            setOpenDrawer(!openDrawer);
                            console.log(openDrawer)
                        }}>
                        <MenuIcon />
                    </IconButton>


                </Box>

                <Drawer anchor='right' open={openDrawer} onClose={
                    () => {
                        setOpenDrawer(!openDrawer)
                    }}
                >
                    <Toolbar >

                        <Box width='250px'
                            height={'100%'}
                            textAlign={'center'}
                            bgcolor={'primary.main'}
                        >

                            <Box display={'flex'} flexDirection='column' color={'white'}>
                                <Button color='inherit'>Home</Button>
                                <Button color='inherit'>About</Button>
                                <Button color='inherit'>Projects</Button>
                                <Button color='inherit'>Contact Me</Button>
                            </Box>
                        </Box>
                    </Toolbar>


                </Drawer>


            </Stack>



        </AppBar >




    )
}

export default Navbar