import InstagramIcon from "../../assets/images/icons/instagram.svg?react";
import TwitterIcon from "../../assets/images/icons/twitter.svg?react";
import YoutubeIcon from "../../assets/images/icons/youtube.svg?react";
import Logo from "../Logo/Logo";
import { FooterColumn } from "./FooterColumn/FooterColumn";
import styles from "./Footer.module.css";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={clsx(styles.footer, styles["footer-background"])}>
      <div className={styles.footerTop}>
        <div className={styles.footerIntro}>
          <Logo />
          <h4>{t("footer.tagline.title")}</h4>
          <p>{t("footer.tagline.subtitle")}</p>
        </div>

        <div className={styles.footerColumns}>
          <FooterColumn
            columnName={t("footer.columns.company.title")}
            items={[
              t("footer.columns.company.items.home"),
              t("footer.columns.company.items.order"),
              t("footer.columns.company.items.faq"),
              t("footer.columns.company.items.contact"),
            ]}
          />
          <FooterColumn
            columnName={t("footer.columns.template.title")}
            items={[
              t("footer.columns.template.items.styleGuide"),
              t("footer.columns.template.items.changelog"),
              t("footer.columns.template.items.licence"),
              t("footer.columns.template.items.webflowUniversity"),
            ]}
            clickable
          />
          <FooterColumn
            columnName={t("footer.columns.flowbase.title")}
            items={[t("footer.columns.flowbase.items.moreCloneables")]}
          />
        </div>
      </div>

      <div className={styles.footerBottom}>
        <div className={styles.socialLinks}>
          <InstagramIcon
            className={styles.socialLink}
            aria-label={t("footer.socials.instagram")}
          />
          <TwitterIcon
            className={styles.socialLink}
            aria-label={t("footer.socials.twitter")}
          />
          <YoutubeIcon
            className={styles.socialLink}
            aria-label={t("footer.socials.youtube")}
          />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
