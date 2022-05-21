import React from 'react'
import { Box, color } from '@mui/system'
import {
    Paper, Card, CardMedia,
    CardContent, CardActions, Button, Typography, Link
} from '@mui/material'
import { GitHub, LinkedIn } from '@mui/icons-material'
import LinkIcon from '@mui/icons-material/Link';

const projects =
    [{
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzSKEkQtCFn5Q9wq5YlNTRQwx2PBJgzWG6Q&usqp=CAU',
        title: 'Groww',
        description: 'This is very good app to work with different',
        github: 'https://github.com/abhi103767',
        deployedlink: 'groww-project.herokuapp.com/home',
        techstack: ['HTML', 'CSS', 'JAVASCRIPT', 'CHARTJS']
    },
    {
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzSKEkQtCFn5Q9wq5YlNTRQwx2PBJgzWG6Q&usqp=CAU',
        title: 'Groww',
        description: 'This is very good app to work with different',
        github: 'https://github.com/abhi103767',
        deployedlink: 'groww-project.herokuapp.com/home',
        techstack: ['HTML', 'CSS', 'JAVASCRIPT', 'CHARTJS']
    }
    ]
function Projects({ project }) {
    return (

        <Box sx={
            {
                width: {
                    md: '500px',
                    sm: '70%'
                },
                height: {
                    md: '100vh',
                    sm: '100vh'
                },


            }
        } boxSizing={'border-box'} p={3}>
            <Card elevation={4}>
                <CardMedia
                    component="img"
                    image={project.image_url}
                    alt="green iguana"
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div">
                        {
                            project.title
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {
                            project.description
                        }
                    </Typography>
                    <Box display={'flex'}
                        sx={
                            {
                                gap: {
                                    md: 3,
                                    sm: 2,
                                    xs: 1
                                }
                            }
                        }
                        pt={2}>
                        {
                            project.techstack.map((item) => (
                                <Typography variant='p'>{item}</Typography>
                            ))
                        }
                    </Box>
                </CardContent>
                <CardActions >
                    <Button sx={
                        {
                            variant: 'outlined',

                        }
                    } variant='contained' hover={{ variant: 'contained' }} href={project.github} target='_blank'>
                        <GitHub />
                        <Typography variant='p' pl={0.8}>code</Typography>
                    </Button>


                    <Button sx={
                        {
                            variant: 'outlined',

                        }
                    } variant='contained' hover={{ variant: 'contained' }} href={project.deployedlink}>
                        <LinkIcon />
                        <Typography variant='p' pl={0.8}>link</Typography>
                    </Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Projects