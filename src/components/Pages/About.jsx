import React from 'react'
import Box from '@mui/material/Box'
import { Button, Typography } from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
function About() {
    return (
        <Box height='100vh'>
            <Box display={'flex'}>
                <Box height={'1px'} width={'40%'}></Box>
                <Box>About Us</Box>
                <Box height={'1px'} border={'1px solid black'} width={'40%'}></Box>
            </Box>
            <Box border={'1px solid red'}
                display='flex'

                sx={
                    {
                        flexDirection: {
                            md: 'row',
                            xs: 'column'
                        }
                    }
                }
                width={'80%'}
                margin={'auto'}
                justifyContent={'space-between'}
            >
                <Box>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFyGbbhMwdx8g/profile-displayphoto-shrink_400_400/0/1638850539412?e=1658361600&v=beta&t=8xybHU994aF_Ltv6l30B_gCazl4qpOj4ger_3l4s5PA' />
                </Box>
                <Box width={'60%'}>
                    <Box>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores porro pariatur officiis nesciunt voluptatum. Quia, atque beatae ad voluptatum neque temporibus et, eaque, nobis minus doloribus maiores voluptates tempore doloremque?
                            Doloribus atque illum repellendus asperiores, optio aut doloremque in nam eveniet repellat, animi temporibus voluptate incidunt molestiae excepturi esse quasi dolorem a perspiciatis. Iusto dolor porro, sed tempore voluptas laborum.
                            Dignissimos sequi numquam animi debitis culpa nesciunt commodi officia saepe hic, aliquam cupiditate autem quos recusandae nam sed soluta, assumenda unde, corporis eos totam. Numquam veniam quaerat eligendi culpa quis!
                        </p>
                    </Box>

                    <Box display={'flex'} gap={'15px'}>
                        <Box>
                            <Button sx={
                                {
                                    variant: 'outlined',

                                }
                            } variant='contained' hover={{ variant: 'contained' }} href={'#'} target='_blank'>
                                <GitHub />
                                <Typography variant='p' pl={0.8}>Github</Typography>
                            </Button>
                        </Box>
                        <Box>
                            <Button sx={
                                {
                                    variant: 'outlined',

                                }
                            } variant='contained' hover={{ variant: 'contained' }} href={'#'} target='_blank'>
                                <LinkedIn />
                                <Typography variant='p' pl={0.8}>Linkdin</Typography>
                            </Button>
                        </Box>

                    </Box>
                </Box>
            </Box>
        </Box >
    )
}

export default About