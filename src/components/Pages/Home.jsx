
import React from 'react'
import { Box, color } from '@mui/system'
import { Link, Typography } from '@mui/material'
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

            <Box>
                <Box display={'flex'} margin={'auto'} width={
                    {
                        md: '800px',
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
                    } justifyContent={'space-between'}>
                    <Box>
                        <Typography variant='h3'>Hii ! I am Avinash</Typography>
                        <Typography variant='h4'>I am FullStackDeveloper</Typography>
                    </Box>
                    <Box display={'flex'} flexDirection='column' justifyContent={'space-between'} >
                        <Link target='_blank' href='https://example.com'>
                            <GitHub />
                        </Link>

                        <Link target='_blank' href='https://example.com'>
                            <LinkedIn />
                        </Link>
                        <Link target='_blank' href='https://example.com'>
                            <Email />
                        </Link>

                    </Box>
                </Box>
            </Box>

        </div>
    )
}

export default Home