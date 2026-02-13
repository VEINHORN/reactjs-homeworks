import { useEffect, useMemo, useState } from "react";
import Button from "../../components/Button/Button";
import { MealsList } from "../../components/MealsList/MealsList";

import styles from "./MenuPage.module.css";
import { useFetch } from "../../hooks/useFetch";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const INITIAL_PAGE = 1;
const MAX_PAGE_SIZE = 6;

export const MenuPage = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [page, setPage] = useState(INITIAL_PAGE);

  const meals = useFetch(
    "https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals",
  );

  const categories = useMemo(() => {
    return Array.from(new Set(meals.map((meal) => meal.category)));
  }, [meals]);

  const filteredMeals = useMemo(() => {
    if (!selectedCategory) return meals;
    return meals.filter((meal) => meal.category === selectedCategory);
  }, [meals, selectedCategory]);

  useEffect(() => {
    setPage(INITIAL_PAGE);
  }, [meals]);

  const pageMeals = filteredMeals.slice(0, page * MAX_PAGE_SIZE);
  const canSeeMore = page * MAX_PAGE_SIZE < filteredMeals.length;

  const onCategoryButtonHandler = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory(null);
      return;
    }

    setSelectedCategory(category);
  };

  return (
    <div className={clsx([styles.menupage, styles["menupage-background"]])}>
      <div className={styles.info}>
        <h1 className="h1Title">{t("menu.title")}</h1>
        <p className={styles.pageDescription}>
          {t("menu.description.part1")}{" "}
          <span
            className={`${styles.highlight} ${styles.tooltip}`}
            data-tooltip={t("menu.description.phoneTooltip")}
          >
            {t("menu.description.phone")}
          </span>{" "}
          {t("menu.description.part2")}
          <br />
          {t("menu.description.part3")}
        </p>
      </div>

      <div className={styles.buttons}>
        {categories.map((category) => (
          <Button
            key={category}
            title={category}
            outlined={selectedCategory !== category}
            onClick={() => onCategoryButtonHandler(category)}
          />
        ))}
      </div>

      <MealsList meals={pageMeals} />

      <div className={styles.seeMoreContainer}>
        {canSeeMore && (
          <Button
            title={t("menu.seeMore")}
            onClick={() => setPage((prevPage) => prevPage + 1)}
          />
        )}
      </div>
    </div>
  );
};
