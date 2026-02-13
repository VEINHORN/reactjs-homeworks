import { useNavigate } from "react-router";
import food from "../../assets/images/backgrounds/food.png";
import Button from "../../components/Button/Button";
import { Rating } from "../../components/Rating/Rating";

import styles from "./HomePage.module.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={clsx([styles.homepage, styles["homepage-background"]])}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>
            {t("home.title.part1")}{" "}
            <span className={styles.highlight}>{t("home.title.highlighted")}</span>{" "}
            {t("home.title.part2")}
          </h1>
          <p>{t("home.subtitle")}</p>
          <Button
            title={t("home.orderButton")}
            onClick={() => navigate("/order")}
          />

          <Rating />
        </div>

        <div className={styles.foodImage}>
          <img src={food} aria-label={t("home.foodDeliveryAlt")} />
        </div>
      </section>
    </div>
  );
};
