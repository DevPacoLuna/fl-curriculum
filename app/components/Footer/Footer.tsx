import styles from "./Footer.module.scss";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { logoFont } from "../Header/Header";

export const socials = [
  {
    icon: <LinkedInIcon className={styles.icon} />,
    color: "#009AE7",
    alt: "linkedin",
    link: "https://www.linkedin.com/in/francisco-javier-luna-figueroa/",
  },
  {
    icon: <GitHubIcon className={styles.icon} />,
    color: "#000",
    alt: "github",
    link: "https://github.com/DevPacoLuna",
  },
  {
    icon: <LogoDevIcon className={styles.icon} />,
    color: "#EB4957",
    alt: "dev.to",
    link: "https://dev.to/devpacoluna",
  },
];

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.socialsBorder}>
        <div className={styles.socials}>
          <h5>You can find me here:</h5>
          <div className={styles.socialsContainer}>
            {socials.map((social, index) => (
              <div
                key={index}
                className={styles.socialBorder}
                onClick={() => window.open(social.link)}
                style={{ backgroundColor: social.color }}
              >
                {social.icon}
                <PlayCircleFilledRoundedIcon
                  className={styles.play}
                  style={{ backgroundColor: social.color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.logo}>
          <p className={logoFont.className}>{`Paco L.`}</p>
        </div>
        <div className={styles.navigation}>
          <a href="">WORKS</a>
          <a href="">ABOUT</a>
          <a href="">AWARDS</a>
          <a href="">CONTACTS</a>
        </div>
        <span>2023 | COPYRIGHT ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};
