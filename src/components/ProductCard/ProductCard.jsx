import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Button, CardActions, Grid } from '@mui/material';
import { ApiContext } from '../../apiContext';

function ProductCard(props) {
    const { title, price, sale_price, thumb, specials, slug } = props.data;
    const { addToCart } = useContext(ApiContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(props.data);
    };

    const handleViewProduct = () => {
        navigate(`/product/${slug}`);
    };

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component='img' height='140' image={thumb} alt={title} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                {sale_price > 0 ? (
                    <Typography variant='body2' color='text.secondary'>
                        Cena promocyjna: {sale_price} zł
                    </Typography>
                ) : (
                    <Typography variant='body2' color='text.secondary'>
                        Cena: {price} zł
                    </Typography>
                )}
                {specials.map((special, index) => (
                    <Typography key={index} variant='body2' color='text.secondary'>
                        {special}
                    </Typography>
                ))}
            </CardContent>
            <CardActions>
                <Grid item xs={6}>
                    <Button size='small' onClick={handleViewProduct}>
                        Zobacz
                    </Button>
                </Grid>
                <Grid item xs={6}>
                    <Button size='small' onClick={handleAddToCart}>
                        Dodaj do koszyka
                    </Button>
                </Grid>
                {/* </Grid> */}
            </CardActions>
        </Card>
    );
}

export default ProductCard;
