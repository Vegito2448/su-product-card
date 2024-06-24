# Testing NPM package deploy

This is a testing package deploy to NPM

### By Peña

## Example

```
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle
} from 'do-product-card';
```

```
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
```
