import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from '../ProductCard/ProductCard';
import { StyledGrid } from './ProductList.styles';

const ProductList = ({ data }) => {
    return (
        <>
            <StyledGrid container spacing={2}>
                {data.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProductCard data={product} />
                    </Grid>
                ))}
            </StyledGrid>
        </>
    );
};

export default ProductList;
