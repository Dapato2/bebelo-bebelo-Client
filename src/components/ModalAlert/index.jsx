import * as React from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

export default function ActionAlerts({ handleClose }) {
    const navigate = useNavigate()

    const handleUndoClick = () => {
        navigate("/");
    }

    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert onClose={handleClose}>This is a success alert — check it out!</Alert>
            <Alert
                action={
                    <Button color="inherit" size="small" onClick={handleUndoClick}>
                        UNDO
                    </Button>
                }
            >
                This is a success alert — check it out!
            </Alert>
        </Stack>
    );
}