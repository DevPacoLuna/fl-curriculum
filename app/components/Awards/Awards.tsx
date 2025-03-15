"use client";
import { useWindowSize } from "@/app/hooks/windowSize";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import styles from "./Awards.module.scss";
import { useEffect, useState } from "react";

interface Awards {
  enable: number;
  year: string;
  image: string;
  name: string;
  tags: string[];
  link: string;
}

const awards: Awards[] = [
  {
    enable: 0,
    year: "4 years",
    image: "/react.png",
    name: "",
    tags: ["Hooks"],
    link: "https://www.romio.mx/",
  },
  {
    enable: 400,
    year: "3 years",
    image: "/typescript.png",
    name: "",
    tags: ["Generics"],
    link: "https://www.romio.mx/",
  },
  {
    enable: 800,
    year: "2 years",
    image: "/nextjs.png",
    name: "",
    tags: ["SSR"],
    link: "https://keskinube.com/",
  },
];

export const Awards = () => {
  const [card, setCard] = useState<number>(0);
  const windowSize = useWindowSize();

  const changeCard = (
    nextPosition: "right" | "left",
    size: "mobile" | "desktop"
  ) => {
    const sizeCard = size === "desktop" ? 400 : 375;
    setCard((prev) =>
      nextPosition === "right" ? prev + sizeCard : prev - sizeCard
    );
  };

  useEffect(() => {
    if (windowSize) {
      setCard(0);
    }
  }, [windowSize]);

  if (windowSize < 991) {
    return (
      <article className={styles.awards} id="Stack">
        <div className={styles.awardsContainer}>
          {card > 0 && (
            <button
              className={styles.awardsActionsLeft}
              onClick={() => changeCard("left", "mobile")}
            >
              <KeyboardArrowLeftIcon />
            </button>
          )}
          <div
            className={styles.awardsActions}
            style={{
              transform: `translateX(-${card}px)`,
            }}
          >
            {awards.map((award, index) => (
              <div className={styles.awardBorder} key={index}>
                <div className={styles.awardContainer}>
                  <div className={styles.awardHeader}>
                    <div className={styles.headerTabBorder}>
                      <div className={styles.headerTab}>
                        <p>{award.year}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.awardBody}>
                    <picture>
                      <img src={award.image} alt="" />
                    </picture>
                    <h5>{award.name}</h5>
                    <div className={styles.tagsContainer}>
                      {award.tags &&
                        award.tags?.map((tag, index) => (
                          <button key={index}>{tag}</button>
                        ))}
                    </div>
                  </div>
                  <div className={styles.awardFooter}>
                    <div className={styles.showBorder}>
                      <button
                        className={styles.show}
                        onClick={() => window.open(award.link)}
                      >
                        <PlayCircleFilledRoundedIcon />
                        <p>LEARN MORE</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {card < 750 && (
            <button
              className={styles.awardsActionsRight}
              onClick={() => changeCard("right", "mobile")}
            >
              <KeyboardArrowRightIcon />
            </button>
          )}
        </div>
      </article>
    );
  }

  return (
    <article className={styles.awards} id="Stack">
      <div className={styles.awardsContainer}>
        <div className={styles.awardsControl}>
          <span>No {card === 0 ? "1" : card === 400 ? "2" : "3"}/3</span>
          <h5>Personal Stack</h5>
          <div className={styles.awardsButtons}>
            <button
              disabled={card <= 0}
              style={{
                width: card === 800 ? "80px" : "58px",
                height: card === 800 ? "80px" : "58px",
              }}
              className={styles.awardsControlLeft}
              onClick={() => changeCard("left", "desktop")}
            >
              <KeyboardArrowLeftIcon />
            </button>
            <button
              disabled={card >= 800}
              style={{
                width: card === 0 ? "80px" : "58px",
                height: card === 0 ? "80px" : "58px",
              }}
              className={styles.awardsControlRight}
              onClick={() => changeCard("right", "desktop")}
            >
              <KeyboardArrowRightIcon />
            </button>
          </div>
        </div>
        <div className={styles.awardsActions}>
          <div
            className={styles.awardBorder}
            style={{
              transform: `translateX(${card}px)`,
            }}
          ></div>
          {awards.map((award, index) => (
            <div className={styles.awardContainer} key={index}>
              <div className={styles.awardHeader}>
                <div className={styles.headerTabBorder}>
                  <div className={styles.headerTab}>
                    <p>{award.year}</p>
                  </div>
                </div>
              </div>
              <div className={styles.awardBody}>
                <picture>
                  <img src={award.image} alt="" />
                </picture>
                <h5>{award.name}</h5>
                <div className={styles.tagsContainer}>
                  {award.tags &&
                    award.tags?.map((tag, index) => (
                      <button key={index}>{tag}</button>
                    ))}
                </div>
              </div>
              <div
                className={styles.awardFooter}
                style={{
                  opacity: card === award.enable ? "1" : "0",
                  transform: `translateY(${
                    card === award.enable ? "5px" : "-5px"
                  })`,
                }}
              >
                <div className={styles.showBorder}>
                  <button
                    className={styles.show}
                    onClick={() => window.open(award.link)}
                  >
                    <PlayCircleFilledRoundedIcon />
                    <p>LEARN MORE</p>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
