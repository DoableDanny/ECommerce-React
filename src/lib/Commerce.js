// Without commerce, you would need to have your own API/backend to create, read, update and delete products from your store.
import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(
  process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
