




import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";

export default function AlertDialog({ open, onClose }) {

    return (
        <Dialog
            open={open}
            sx={{
                background: '#000000',
                '& .MuiPaper-root': {
                    background: '#000000',
                },
                '& .MuiBackdrop-root': {
                    backgroundColor: 'transparent',

                },

            }}
            style={{ opacity: 0.9,}}
            onClose={onClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle style={{color: 'white', fontWeight: '900'}} id="alert-dialog-title">
                {"At Derak Cloud"} <br/>
                <span style={{fontSize: '14px', fontWeight: '100'}}>August 2022 - March 2025 </span>
            </DialogTitle>

            <DialogContent>
                <DialogContentText style={{color: 'white'}} id="alert-dialog-description">
                    .Led the responsive design and implementation of user and admin panels, optimizing dashboards, purchase and renewal flows, and mobile access to support users and administrators across all device types.
                </DialogContentText>


            </DialogContent>

            <DialogActions>

                <Button onClick={onClose} autoFocus>
                    read
                </Button>
            </DialogActions>
        </Dialog>
    );
}



