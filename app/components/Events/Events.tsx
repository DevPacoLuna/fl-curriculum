"use client";
import { useEffect, useState } from "react";
import styles from "./Events.module.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import { useWindowSize } from "@/app/hooks/windowSize";

interface event {
  year: string;
  image: string;
  name: string;
  location: string;
  topic: string;
  link?: string;
}

const certifications: event[] = [
  {
    year: "2016 - 2021",
    image: "tec.png",
    name: "Bachelor's Degree",
    location: "Colima, MX",
    topic: "Computer Systems Engineer",
  },
  {
    year: "2021",
    image: "tec.png",
    name: "Certification",
    location: "Colima, MX",
    topic: "Data Science",
  },
];

const talks: event[] = [
  {
    year: "2019",
    image: "brightcoders.png",
    name: "BrightCoders",
    location: "Colima, MX",
    topic: "Getting started with GitHub",
  },
];

const exhibitions: event[] = [
  {
    year: "2024",
    image: "codelaunch.png",
    name: "Codelaunch",
    location: "GDL, MX",
    topic: "Hackaton",
    link: "https://www.linkedin.com/posts/codelaunch-accelerator_codelaunchmex-pitchcompetition-mexicostartup-activity-7249126636950847488-dNBN?utm_source=share&utm_medium=member_desktop&rcm=ACoAACzKvp0BRkHA3T90gOFwsUNSsrpufT1bLcc",
  },
];

export const Events = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [stepPosition, setStepPosition] = useState<0 | 100 | 200>(0);
  const windowSize = useWindowSize();

  useEffect(() => {
    switch (step) {
      case 1:
        setStepPosition(0);
        break;
      case 2:
        setStepPosition(100);
        break;
      case 3:
        setStepPosition(200);
        break;
    }
  }, [step]);

  return (
    <div className={styles.events} id="Events">
      <div className={styles.eventsContainer}>
        <h4 className={styles.eventsTitle}>Events & Certifications</h4>
        <div className={styles.stepper}>
          <div
            className={styles.stepperActive}
            style={{
              transform: `translateX(${stepPosition}%)`,
            }}
          ></div>
          <p
            onClick={() => setStep(1)}
            className={step === 1 ? styles.active : ""}
          >
            EDUCATION
          </p>
          <p
            onClick={() => setStep(2)}
            className={step === 2 ? styles.active : ""}
          >
            TALKS
          </p>
          <p
            onClick={() => setStep(3)}
            className={step === 3 ? styles.active : ""}
          >
            EXHIBITION
          </p>
        </div>

        {step === 1 ? (
          <div className={styles.eventList}>
            {certifications.map((certification, index) => (
              <div className={styles.event} key={index}>
                <p className={styles.year}>{certification.year}</p>
                <div className={styles.image}>
                  <picture>
                    <img src={"/" + certification.image} alt="" />
                  </picture>
                </div>
                <h5>{certification.name}</h5>
                <div className={styles.location}>
                  {windowSize > 425 && <LocationOnIcon />}
                  <p>{certification.location}</p>
                </div>
                <div className={styles.topic}>
                  {windowSize > 425 && <SmsOutlinedIcon />}
                  <p>{certification.topic}</p>
                </div>
                {certification.link && (
                  <div className={styles.action}>
                    <KeyboardArrowRightIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : step === 2 ? (
          <div className={styles.eventList}>
            {talks.map((talk, index) => (
              <div className={styles.event} key={index}>
                <p className={styles.year}>{talk.year}</p>
                <div className={styles.image}>
                  <picture>
                    <img src={"/" + talk.image} alt="" />
                  </picture>
                </div>
                <h5>{talk.name}</h5>
                <div className={styles.location}>
                  {windowSize > 425 && <LocationOnIcon />}
                  <p>{talk.location}</p>
                </div>
                <div className={styles.topic}>
                  {windowSize > 425 && <SmsOutlinedIcon />}
                  <p>{talk.topic}</p>
                </div>
                {talk.link && (
                  <div className={styles.action}>
                    <KeyboardArrowRightIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.eventList}>
            {exhibitions.map((exhibition, index) => (
              <div className={styles.event} key={index}>
                <p className={styles.year}>{exhibition.year}</p>
                <div className={styles.image}>
                  <picture>
                    <img src={"/" + exhibition.image} alt="" />
                  </picture>
                </div>
                <h5>{exhibition.name}</h5>
                <div className={styles.location}>
                  {windowSize > 425 && <LocationOnIcon />}
                  <p>{exhibition.location}</p>
                </div>
                <div className={styles.topic}>
                  {windowSize > 425 && <SmsOutlinedIcon />}
                  <p>{exhibition.topic}</p>
                </div>
                {exhibition.link && (
                  <div className={styles.action}>
                    <KeyboardArrowRightIcon />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
