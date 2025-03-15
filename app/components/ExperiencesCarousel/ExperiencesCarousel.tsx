"use client";
import { useWindowSize } from "@/app/hooks/windowSize";
import styles from "./ExperiencesCarousel.module.scss";
import CodeIcon from "@mui/icons-material/Code";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useEffect, useState } from "react";

interface Experiences {
  id: string;
  icon: React.ReactElement;
  name: string;
  position: string;
  tags?: string[];
  description?: string;
  image: string;
  video: string;
}

const experiences: Experiences[] = [
  {
    id: "01",
    icon: <CodeIcon />,
    name: "Powered",
    position: "Tech Lead & Co-Founder",
    description:
      "A comprehensive platform that combines all the tools you need to manage, protect, and expand your business.",
    tags: ["SaaS", "React", "Typescript"],
    image: "powered.png",
    video: "https://www.romio.mx/",
  },
  {
    id: "02",
    icon: <CodeIcon />,
    name: "Keskinube",
    position: "Tech Lead & Co-Founder",
    description:
      "Application for administration, inventory management, e-commerce, and retail, from small to large businesses.",
    tags: ["SaaS", "Next.js", "Js"],
    image: "keskinube.png",
    video: "https://keskinube.com/",
  },
  {
    id: "03",
    icon: <CodeIcon />,
    name: "Balety",
    position: "Full Stack Developer",
    description: "Peer-to-peer car rental platform.",
    tags: ["Marketplace", "React", "Js", "Typescript"],
    image: "romio.png",
    video: "https://balety.romio.mx/resultados",
  },
];

export const ExperiencesCarousel = () => {
  const [card, setCard] = useState<number>(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize > 991 || windowSize === 0) {
      setCard(0);
      return;
    }

    const interval = setInterval(() => {
      setCard((prev) => (prev >= 760 ? 0 : prev + 380));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [windowSize]);

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.itemCarouselContainer}
          style={{
            transform: `translateX(-${card}px)`,
          }}
        >
          {experiences.map((experience, index) => (
            <div className={styles.item} key={experience.id}>
              <div className={styles.itemHeader}>
                <div className={styles.positionItemHeader}>
                  <p>{experience.id}</p>
                  <span>{experience.position}</span>
                </div>
                <div className={styles.iconItemHeader}>{experience.icon}</div>
              </div>

              <div className={styles.itemBody}>
                <picture>
                  <img src={"/" + experience.image} alt="" />
                </picture>
              </div>

              <div className={styles.itemFooter}>
                <h4>{experience.name}</h4>
                {experience.description && <p>{experience.description}</p>}
                <div className={styles.tagsContainer}>
                  {experience.tags &&
                    experience.tags?.map((tag, index) => (
                      <button key={index}>{tag}</button>
                    ))}
                </div>
              </div>

              {index === 0 ? (
                <button
                  className={styles.show}
                  onClick={() => window.open(experience.video, "_blank")}
                >
                  <PlayCircleFilledRoundedIcon />
                  <p>VIEW CASE</p>
                </button>
              ) : (
                <button
                  className={styles.showRound}
                  onClick={() => window.open(experience.video, "_blank")}
                >
                  <PlayArrowIcon />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
