import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import { TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { GenerateUniqueId, addjob } from '../Redux/JobSlice';
import { Toaster, toast } from 'react-hot-toast';
import { LogoutOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Addnewjob = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [position, setPosition] = useState('');
    const [titleerror, setTitleError] = useState('');
    const [positionerror, setPositionError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const AddJobHandler = () => {
        if (!title && !position) {
            setTitleError('Title is required');
            setPositionError('Position is required');            
        } else if (!title) {
            setTitleError('Title is required');
        }
        else if (!position) {
            setPositionError('Position is required');
        }
        else if (isNaN(position)) {
            setPositionError('Position must be a number');
        }
        else if (title && position) {
            dispatch(addjob({ id: GenerateUniqueId(), title: title, position: position }));
            setTitleError('')
            setPositionError('')
            setPosition('')
            setTitle('')
            toast.success('Job added successfully')
            setTimeout(() => {
                handleClose()
            }, 1000);
        }
    }

    const logoutHandler = () => {
        localStorage.removeItem('credential')
        toast.success('Logout successful')
        navigate('/')
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: '60%', sm: '40%', md: '30%' },
        bgcolor: 'background.paper',
        boxShadow: 24,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        p: 4,
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingRight: '40px' }}>
                <Button onClick={handleOpen} variant='contained' sx={{backgroundColor: 'var(--primary-color)', color: 'var(--background-color)', borderRadius: '10px'}} endIcon={<WorkHistoryIcon />}>
                    Add New Job
                </Button>
                <Button onClick={logoutHandler} variant="contained" sx={{backgroundColor: 'var(--primary-color)', color: 'var(--background-color)', borderRadius: '10px'}} endIcon={<LogoutOutlined />}>
                    Logout
                </Button>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style} >
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                            Add New Job
                        </Typography>
                        <TextField value={title} placeholder='Job Title' onChange={(e) => setTitle(e.target.value)} style={{ border: titleerror && '1px solid var(--secondary-color)', }} />
                        {titleerror && <Typography
                            variant="body2"
                            sx={{ color: "var(--secondary-color)", fontSize: "14px", fontWeight: "bold" }}
                        >
                            {titleerror}
                        </Typography>}
                        <TextField value={position} placeholder='Position' onChange={(e) => setPosition(e.target.value)} style={{ border: positionerror && '1px solid var(--secondary-color)', }} />
                        {positionerror && <Typography
                            variant="body2"
                            sx={{ color: "var(--secondary-color)", fontSize: "14px", fontWeight: "bold" }}
                        >
                            {positionerror}
                        </Typography>}
                        <Button onClick={AddJobHandler} variant="contained" sx={{ backgroundColor: 'var(--primary-color)' }}>Submit</Button>
                    </Box>
                </Fade>
            </Modal>
            <Toaster />
        </div>
    );
}

export default Addnewjob