import styles from "./Header.module.scss";
import { socials } from "../Footer/Footer";
import { Monoton } from "next/font/google";

export const logoFont = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

export const Header = () => {
  return (
    <nav className={styles.headerContainer}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <p className={logoFont.className}>{`Paco L.`}</p>
        </div>
        <div className={styles.navigation}>
          <a href="#Works">WORKS</a>
          <a href="#Events">ABOUT</a>
          <a href="#Stack">STACK</a>
          <a href="#Contacts">CONTACTS</a>
        </div>
        <div className={styles.social}>
          {socials.map((social, index) => (
            <div
              key={index}
              className={styles.socialIcons}
              onClick={() => window.open(social.link, "_blank")}
            >
              {social.icon}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
