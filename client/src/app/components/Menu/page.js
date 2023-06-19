'use client';

import {useState} from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { Avatar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import {useDispatch} from 'react-redux'
import {setLogout} from '../../redux/reducerSlice/userSlice'
export default function BasicMenu() {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <Avatar style={{background:"red"}}>M</Avatar>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={()=> dispatch(setLogout())}>Logout</MenuItem>
      </Menu>
    </div>
  );
}