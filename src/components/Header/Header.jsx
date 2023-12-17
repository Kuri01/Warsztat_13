import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Home } from '@mui/icons-material';

const Header = () => {
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate('/cart');
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton color='inherit' aria-label='open cart' onClick={handleHomeClick}>
                    <Home />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    Kuriata shop
                </Typography>
                <IconButton color='inherit' aria-label='home' onClick={handleCartClick}>
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
