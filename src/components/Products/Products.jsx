import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  {
    id: 1,
    name: 'Shoes',
    description: 'Running shoes.',
    price: '$5',
    image:
      'https://i.insider.com/5e38419b5bc79c4c7d4e1192?width=906&format=jpeg',
  },
  {
    id: 2,
    name: 'Macbook',
    description: 'Apple macbook.',
    price: '$10',
    image:
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-gold-select-201810?wid=892&hei=820&&qlt=80&.v=1603332211000',
  },
];

// Grid item: xs=12 means 1 item takes whole space on xs screen. sm=6 means 2 items will fit on a row.
const Products = () => {
  return (
    <main>
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;