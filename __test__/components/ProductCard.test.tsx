import React, { act } from "react";
import render from "react-test-renderer";
import { ProductCard } from '../../src/components';
import { product1 } from "../data";

describe('ProductCard', () => {

  test('should render the product Card with the default data', () => {
    const wrapper = render.create(
      <ProductCard
        product={product1}
      >
        {() =>
          <h1>Product Card</h1>
        }
      </ProductCard>);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('should increment the product quantity', () => {

    const wrapper = render.create(
      <ProductCard
        product={product1}
      >
        {({ quantity, increaseBy }) =>
          <><h1>Product Card</h1>
            <span>{quantity}</span>
            <button onClick={() => increaseBy(1)}>Increase</button>
          </>
        }
      </ProductCard>);

    let tree: any = wrapper.toJSON();
    console.log('tree', tree);
    expect(tree).toMatchSnapshot();
    act(() => { tree.children[2].props.onClick(); });
    tree = wrapper.toJSON();
    expect(tree.children[1].children[0]).toBe('1');

  });
});