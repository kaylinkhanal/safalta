'use client'
import * as React from 'react';
import Image from 'next/image';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import {setItem} from '../../redux/reducerSlice/itemSlice'
import {useSelector, useDispatch} from 'react-redux'

export default function AlignItemsList(props) {
  const {currentSelectedItem} = useSelector(state=>state.item)
  const dispatch = useDispatch()
  return (
      <div>
      <ListItem sx={{  bgcolor: currentSelectedItem._id  === props.item._id ? "#FA9D1B" : null}} alignItems="flex-start" onClick={()=>dispatch(setItem(props.item))}>
        <ListItemAvatar>
          <Avatar alt={props.item['Item Name']} src={`http://localhost:8000/item-image/${props.item._id}`} />
        </ListItemAvatar>

        <ListItemText
          primary={props.item['Item Name']}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                -
              </Typography>
              {props.item['Item Description']}
            </React.Fragment>
          }
        />

      </ListItem>
      <Divider variant="inset" component="li" />
      </div>
  );
}