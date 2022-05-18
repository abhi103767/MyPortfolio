import React from 'react'
import Box from '@mui/material/Box'
function About() {
    return (
        <Box>
            <Box border={'1px solid red'}
                display={'flex'}
                width={'80%'}
                margin={'auto'}
                justifyContent={'space-between'}
            >
                <Box>
                    <img src='https://media-exp1.licdn.com/dms/image/C4E03AQFyGbbhMwdx8g/profile-displayphoto-shrink_400_400/0/1638850539412?e=1658361600&v=beta&t=8xybHU994aF_Ltv6l30B_gCazl4qpOj4ger_3l4s5PA' />
                </Box>
                <Box width={'60%'}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est libero recusandae quaerat cum consequatur dignissimos, laborum eos voluptatem vitae omnis cupiditate, accusamus eligendi at modi? Facere tempore voluptate consequatur totam.
                    </p>
                </Box>
            </Box>
        </Box>
    )
}

export default About