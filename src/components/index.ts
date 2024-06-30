import { ProductCardHocProps } from "../interfaces/types";
import { ProductButtons } from "./ProductButtons";
import ProductCardHoc from "./ProductCard";
import { ProductImage } from "./ProductImage";

const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
  Title: ProductImage,
  Image: ProductImage,
  Buttons: ProductButtons,
});


export {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductImage as ProductTitle
};

