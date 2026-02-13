import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "./../../features/cart/cartSlice";
import clsx from "clsx";
import Price from "./Price/Price";
import Title from "./Title/Title";
import type { Meal } from "../../types/mealType";
import { useTranslation } from "react-i18next";

type CardProps = Omit<Meal, "category"> & {
  className?: string;
  infoClassName?: string;
};

export const Card = ({
  id,
  meal,
  img,
  price,
  instructions,
  className,
  infoClassName,
}: CardProps) => {
  const { t } = useTranslation();
  const [itemsCount, setItemsCount] = useState(1);
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemsCount(Number(event.target.value));
  };

  return (
    <div className={clsx(styles.card, className)}>
      <div className={styles.cardImage}>
        <img src={img} />
      </div>

      <div className={clsx(styles.cardInfo, infoClassName)}>
        <div className={styles.cardHeader}>
          <Title meal={meal} />

          <Price price={price} />
        </div>
        {instructions && (
          <p className={styles.cardDescription}>{instructions}</p>
        )}
        <div className={styles.cardControl}>
          <input
            type="number"
            min={1}
            value={itemsCount}
            onChange={handleChange}
          />
          <Button
            title={t("card.addToCart")}
            onClick={() => dispatch(addToCart({ id, itemsCount }))}
          />
        </div>
      </div>
    </div>
  );
};
