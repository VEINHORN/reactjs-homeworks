import type React from "react";
import { useTranslation } from "react-i18next";
import styles from "./LanguageDropdown.module.css";

export const LanguageDropdown = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select
      className={styles["language-dropdown"]}
      onChange={handleLanguageChange}
    >
      <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿</option>
      <option value="ru">🇷🇺</option>
      <option value="pl">🇵🇱</option>
    </select>
  );
};
