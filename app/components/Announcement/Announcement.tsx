"use client";
import { useEffect, useState } from "react";
import styles from "./Announcement.module.scss";
import PlayCircleFilledRoundedIcon from "@mui/icons-material/PlayCircleFilledRounded";

interface Experiences {
  company: string;
  place: string;
  dateRange: string;
  position: string;
  activities: string[];
  image: string;
  link?: string;
}

const Experiences: Experiences[] = [
  {
    company: "Romio",
    place: "remote",
    dateRange: "08/2024",
    position: "Technical Leader",
    activities: [
      "Oversee the deployment and sale of 10+ platforms, each serving with 70+ monthly reservations.",
      "Design and implement a SaaS architecture that enables custom car rental platforms for individual clients.",
      "Optimize the system to handle peak loads of 1200+ users.",
      "Ensure scalability and maintainability by leveraging AWS lambdas, and modular design using React + Typescript.",
      "Collaborate with stakeholders to tailor solutions that meet diverse business needs.",
    ],
    image: "power_romio.png",
    link: "https://www.romio.mx/",
  },
  {
    company: "Codenation",
    place: "remote",
    dateRange: "01/2023 - 08/2024",
    position: "Freelance Developer",
    activities: [
      "Develop a microservice-based web platform using TypeScript, React, and Next.js",
      "Helped design and implement scalable front-end architectures, optimizing performance and maintainability.",
      "Guided a small team of developers, conducting code reviews, mentoring, and ensuring best practices.",
      "Collaborated closely with backend and DevOps teams to integrate APIs and cloud services.",
      "Improved development workflows by implementing CI/CD pipelines and automated testing.",
    ],
    image: "keskinube.png",
    link: "https://keskinube.com/",
  },
  {
    company: "Enroute Systems",
    place: "remote",
    dateRange: "01/2022 - 07/2024",
    position: "Software Developer",
    activities: [
      "Enhanced the user interface (UI) and user experience (UX) using React with TypeScript, ensuring a seamless and intuitive browsing experience.",
      "Implemented responsive design principles to ensure compatibility across multiple devices and screen sizes.",
      "Strengthened backend functionality using Express.js, improving API endpoints and enhancing overall system reliability.",
      "Optimized frontend performance through lazy loading, and efficient data fetching strategies.",
    ],
    image: "enroute.png",
    link: "https://enroutesystems.com/",
  },
  {
    company: "Balety",
    place: "remote",
    dateRange: "07/2021 - 06/2022",
    position: "Software Developer",
    activities: [
      "Led design and development of a monolith car rental platform using the latest technologies of React + Typescript, C#, .Net, Sass and Javascript.",
      "Reduced page loading time by 50% by building a new platform infrastructure from Asp.net to React + .Net, leading to a better customer experience.",
      "Continuous integration pipeline with GitHub actions for unit, e2e, and integration testing using Cypress and Jest.",
      "Enriched system security with tokens, encrypted data, and payments with a 3D secure stripe configuration.",
      "Integrated multiple third-party libraries including Formik, Material UI, Yup, and google-map-react.",
    ],
    image: "romio.png",
    link: "https://balety.romio.mx/resultados",
  },
];

export const Announcement = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev >= Experiences.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <article className={styles.announcement} id="Works">
      <hr />
      <div className={styles.announcementContainer}>
        <div className={styles.information}>
          <div className={styles.logo}>
            <p>{Experiences[step].dateRange}</p>
          </div>
          <div className={styles.informationProject}>
            <div>
              <h5 className={styles.position}>{Experiences[step].position}</h5>
              <p className={styles.company}>{Experiences[step].company}</p>
            </div>
            <div className={styles.stepper}>
              {Array.from({ length: Experiences.length }, (_, i) => i + 1).map(
                (data, index) => (
                  <div
                    key={index}
                    className={styles.step}
                    onClick={() => setStep(index)}
                    style={{
                      width: `calc(${100 / Experiences.length + "%"} - 10px)`,
                      backgroundColor: step === index ? "#fecf45" : "#ffe0c9",
                    }}
                  ></div>
                )
              )}
            </div>
            <ul>
              {Experiences[step].activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>

            <button
              className={styles.case}
              onClick={() => window.open(Experiences[step].link, "_blank")}
            >
              <PlayCircleFilledRoundedIcon />
              <p>VIEW CASE</p>
            </button>
          </div>
        </div>

        <div className={styles.image}>
          <div className={styles.imageContainer}>
            <picture>
              <img src={Experiences[step].image} alt="" />
            </picture>
          </div>
        </div>
      </div>
    </article>
  );
};
