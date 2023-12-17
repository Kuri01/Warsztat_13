import React, { useContext } from 'react';
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText, Chip, Button } from '@mui/material';
import { ApiContext } from '../../apiContext';
import { useSingleProduct } from './SingleProduct.hook';

const Content = ({ data }) => {
    const { addToCart } = useContext(ApiContext);
    const handleAddToCart = () => {
        addToCart(data);
    };

    const { title, purpose, colors, product_cat, price, sale_price, thumb, specials } = data;
    return (
        <>
            <CardMedia component='img' height='140' image={thumb} alt={title} />
            <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Cena: {sale_price > 0 ? `${sale_price} (przecena z ${price})` : price}
                </Typography>
                <List dense>
                    {purpose.map((p, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={p.name} />
                        </ListItem>
                    ))}
                </List>
                <div>
                    {colors.map((color, index) => (
                        <Chip key={index} label={color.name} />
                    ))}
                </div>
                <div>
                    {product_cat.map((cat, index) => (
                        <Chip key={index} label={cat} />
                    ))}
                </div>
                <div>
                    {specials.map((special, index) => (
                        <Chip key={index} label={special} color='primary' />
                    ))}
                </div>
            </CardContent>
            <Button variant='contained' color='primary' onClick={handleAddToCart}>
                Dodaj do koszyka
            </Button>
        </>
    );
};

const SingleProduct = () => {
    const { data } = useSingleProduct();

    return <Card>{data && <Content data={data[0]} />}</Card>;
};

export default SingleProduct;
