import React from "react";
import render from "react-test-renderer";
import { ProductCard, ProductImage } from '../../src/components';
import { product1 } from "../data";

describe('ProductImage', () => {

  test('should render the product image with the default data', () => {
    const wrapper = render.create(
      <ProductCard
        product={product1}
      >
        {() =>
          <ProductImage

          />}
      </ProductCard>);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});