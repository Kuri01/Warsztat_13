import React, { useContext } from 'react';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { ApiContext } from '../../apiContext';

const Cart = () => {
    const { cart, updateQuantity, deleteFromCart } = useContext(ApiContext);

    return (
        <List>
            {cart.map((item) => (
                <ListItem key={item.title}>
                    <ListItemText primary={item.title} secondary={`Ilość: ${item.quantity}`} />
                    <ListItemSecondaryAction>
                        <IconButton edge='end' aria-label='reduce' onClick={() => updateQuantity(item.title, -1)}>
                            <RemoveCircleOutlineIcon />
                        </IconButton>
                        <IconButton edge='end' aria-label='increase' onClick={() => updateQuantity(item.title, 1)}>
                            <AddCircleOutlineIcon />
                        </IconButton>
                        <IconButton edge='end' aria-label='delete' onClick={() => deleteFromCart(item.title)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default Cart;
