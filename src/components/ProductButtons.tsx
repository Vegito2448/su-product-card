import React, { CSSProperties, useCallback, useContext } from "react";
import styles from '../styles/styles.module.css';
import { ProductContext } from "./ProductCard";
export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties;
}
export const ProductButtons = ({ className, style }: ProductButtonsProps) => {


  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(() => maxCount !== undefined && counter >= maxCount, [counter, maxCount]);

  return (
    <div
      className={`${styles.buttonsContainer} ${className}`}
      style={style}
    >
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}> - </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`}
        aria-disabled={isMaxReached()}
        disabled={isMaxReached()}
        onClick={() => increaseBy(1)}> + </button>
    </div>
  );
};