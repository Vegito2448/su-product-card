import React from "react";
import render from "react-test-renderer";
import { ProductCard, ProductTitle } from "../../src/components";
import { product1 } from "../data";

describe('ProductTile', () => {

  // test('should render the product tile with the correct data', () => {
  //   const wrapper = render.create(
  //     <ProductTitle
  //       title="Custom Product"
  //       className="custom-class"
  //     />
  //   );

  //   console.log(`🚀 ~ test ~ wrapper:`, wrapper);


  //   expect(wrapper.toJSON()).toMatchSnapshot();

  // });

  test('should render the product tile with the default data', () => {
    const wrapper = render.create(
      <ProductCard
        product={product1}
      >
        {() =>
          <ProductTitle

          />}
      </ProductCard>);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});