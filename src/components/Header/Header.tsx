import Logo from "../Logo/Logo";
import Bucket from "../Bucket/Bucket";
import { Navigation } from "./Navigation/Navigation";
import styles from "./Header.module.css";
import { useAuth } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router";
import type React from "react";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import { LanguageDropdown } from "./LanguageDropdown/LanguageDropdown";
import { useTranslation } from "react-i18next";

const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated, loading, logout } = useAuth();
  const { t } = useTranslation();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    await logout();
    navigate("/");
  };

  if (loading) return null;

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <Logo />
        <div className={styles.navLinksWrapper}>
          <Navigation
            items={[
              { label: t("header.home"), path: "/" },
              { label: t("header.menu"), path: "/menu" },
              { label: t("header.company") },
              ...(isAuthenticated
                ? [
                    {
                      label: t("header.logout"),
                      path: "/logout",
                      onClick: handleLogout,
                    },
                  ]
                : [{ label: t("header.login"), path: "/login" }]),
            ]}
          />

          <div className={styles.btnWrapper}>
            <Bucket />
            <ThemeToggle />
            <LanguageDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
