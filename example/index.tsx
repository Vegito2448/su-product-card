import * as React from 'react';
import 'react-app-polyfill/ie11';
import { createRoot } from 'react-dom/client';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug',
  description: 'A mug for your coffee',
  img: '/coffee-mug.png',
  price: 10,
};

const App = () => {
  return (
    <>
      <ProductCard
        initialValues={{
          quantity: 4,
          maxQuantity: 10,
        }}
        product={product}
        className="bg-dark text-white" >
        {(_) =>
          <>
            <ProductImage className='custom-image' />
            <ProductTitle className="text-white text-bold" />
            <ProductButtons className="custom-buttons" />
          </>
        }</ProductCard>
    </>
  );
};


const root = createRoot(document.getElementById('root')!);
root.render(<App />);
