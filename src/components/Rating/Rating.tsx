import TrustpilotLogo from "../../assets/images/logos/trustpilot-logo.svg?react";
import styles from "./Rating.module.css";
import { useTranslation } from "react-i18next";

export const Rating = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.ratingWrapper}>
      <TrustpilotLogo className={styles.ratingLogo} />
      <div className={styles.rating}>
        <p>
          <span className={styles.greenText}>{t("rating.part1")}</span>{" "}
          {t("rating.part2")}
        </p>
      </div>
    </div>
  );
};
