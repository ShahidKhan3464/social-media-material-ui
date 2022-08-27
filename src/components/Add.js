import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add'
import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const StyledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const Add = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip
                onClick={e => setOpen(true)}
                title="Delete"
                sx={{ position: 'fixed', bottom: 20, left: { xs: 'calc(50% -25px)', md: 30 } }}
            >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip >
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    p={3}
                    width={400}
                    height={280}
                    bgcolor='white'
                    borderRadius={5}
                >
                    <Typography variant='h6' color="gray" textAlign='center' >Create post</Typography>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add