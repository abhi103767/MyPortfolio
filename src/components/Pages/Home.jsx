
import React from 'react'
import { Box, color } from '@mui/system'
import { Link, Button, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'
import { Email, GitHub, LinkedIn } from '@mui/icons-material'

import { makeStyles } from '@material-ui/styles'


const useStyles = makeStyles({
    section: {
        color: 'green',
        backgroundColor: 'yellow'
    },
    heading: {
        color: 'red',

    }
})


function Home() {

    const styles = useStyles();


    return (
        <div>

            <Box height={'100vh'} display={'flex'} >
                <Box display={'flex'} margin={'auto'} width={
                    {
                        md: '100%',
                        sm: '80%',
                        xs: '95%'

                    }
                }
                    my={
                        {
                            md: '80px',
                            sm: '60px',
                            xs: '40px'

                        }
                    } justifyContent={'space-evenly'} >
                    <Box>
                        <Box paddingTop={10} paddingDown={2}>
                            <Typography variant='h3'>Hii ! I am Avinash</Typography>
                            <Typography variant='h4'>I am FullStackDeveloper</Typography>
                        </Box>
                        <Box paddingTop={5} display={'flex'} gap='15px'>
                            <Button variant='contained'>Resume</Button>
                            <Button variant='contained'>Get in Touch</Button>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexDirection='column' justifyContent={'space-between'} >
                        {/* <Link target='_blank' href='https://example.com'>
                            <GitHub />
                        </Link>

                        <Link target='_blank' href='https://example.com'>
                            <LinkedIn />
                        </Link>
                        <Link target='_blank' href='https://example.com'>
                            <Email />
                        </Link> */}
                        <Box borderRadius={'2px'}>
                            <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFyGbbhMwdx8g/profile-displayphoto-shrink_400_400/0/1638850539412?e=1658361600&v=beta&t=8xybHU994aF_Ltv6l30B_gCazl4qpOj4ger_3l4s5PA' />
                        </Box>


                    </Box>
                </Box>
            </Box>

        </div >
    )
}

export default Home