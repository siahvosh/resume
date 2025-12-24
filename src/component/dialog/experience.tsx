




import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";

export default function AlertDialog({ open, onClose, stepDialog }) {
    console.log({stepDialog: stepDialog})
    if (!stepDialog) return null;
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

            <DialogTitle style={{display: 'flex', flexDirection: 'column'}} id="alert-dialog-title">
                <span style={{color: 'white', fontWeight: '900',fontSize: '32px'}}>{stepDialog.title}</span>
                <span style={{color: 'white',fontSize: '12px', fontWeight: '100'}}>{stepDialog.date} </span>
            </DialogTitle>

            <DialogContent>
                <DialogContentText style={{color: 'white'}} id="alert-dialog-description">
                   {stepDialog.description}
                </DialogContentText>
            </DialogContent>
            <DialogTitle style={{display: 'flex', flexDirection: 'column'}} id="alert-dialog-title">
                <span style={{color: 'white', fontWeight: '900',fontSize: '32px'}}>{stepDialog?.secondTitle}</span>
                <span style={{color: 'white',fontSize: '12px', fontWeight: '100'}}>{stepDialog?.secondDate}</span>
            </DialogTitle>

            <DialogContent>
                <DialogContentText style={{color: 'white'}} id="alert-dialog-description">
                    {stepDialog?.secondDescription}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Button onClick={onClose} autoFocus>
                    close
                </Button>
            </DialogActions>
        </Dialog>
    );
}



