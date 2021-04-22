import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    {
        id: 1,
        name: 'Shoes',
        description: 'Running Shoes',
        price: '$5',
        image:
            'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74e50844-7e6b-4889-8fd9-71eb2abe0323/zoomx-invincible-run-flyknit-mens-running-shoe-NgvDVX.png',
    },
    {
        id: 1,
        name: 'MacBook',
        description: 'Apple MacBook',
        price: '$11',
        image: 'https://img.mvideo.ru/Pdb/30044908b.jpg',
    },
];

const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={`${product.id}_${product.name}`} xs={12} sm={6} md={4} lg={3}>
                        <Product key={product.id} product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products;
