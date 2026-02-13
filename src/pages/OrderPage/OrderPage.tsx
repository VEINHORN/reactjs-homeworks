import { useSelector } from "react-redux";
import styles from "./OrderPage.module.css";
import Button from "../../components/Button/Button";
import { useGetMealsQuery } from "../../features/meals/mealsApi";
import { selectEnrichedOrderItems } from "../../features/cart/cartSelectors";
import { OrderItem } from "../../components/OrderItem/OrderItem";
import { useState } from "react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export const OrderPage = () => {
  const { t } = useTranslation();
  useGetMealsQuery(undefined);

  const orderItems = useSelector(selectEnrichedOrderItems);
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");

  return (
    <div className={clsx([styles.orderpage, styles["orderpage-background"]])}>
      <h1 className={clsx("h1Title", styles.header)}>{t("order.title")}</h1>
      {orderItems.length === 0 ? (
        <p className={styles.emptyCartMessage}>{t("order.emptyCart")}</p>
      ) : (
        <>
          <div className={styles.cardsWrapper}>
            <div className={styles.cards}>
              {orderItems.map(({ id, quantity, meal }) => (
                <OrderItem
                  key={id}
                  id={id}
                  img={meal.img}
                  meal={meal.meal}
                  price={meal.price}
                  quantity={quantity}
                />
              ))}
            </div>
          </div>

          <div className={styles.address}>
            <div className={styles.inputField}>
              <label htmlFor="street">{t("order.street")}</label>
              <input
                id="street"
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>

            <div className={styles.inputField}>
              <label htmlFor="house">{t("order.house")}</label>
              <input
                id="house"
                type="text"
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </div>

            <Button
              title={t("order.orderButton")}
              onClick={() => alert(t("order.successMessage"))}
            />
          </div>
        </>
      )}
    </div>
  );
};
