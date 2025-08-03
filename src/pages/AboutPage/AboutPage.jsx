import cls from "./aboutpage.module.scss";
import { PersonalTable } from "src/components/index.js";
import { ProfileImage } from "src/assets/index.js";
import { motion } from "motion/react";

const textAnimation = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { type: "spring", delay: custom * 0.2 },
  }),
};

export const AboutPage = () => {
  return (
    <>
      <section>
        <div className="container">
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={textAnimation}
            viewport={{ once: true }}
            className={cls.about__wrapper}
          >
            <h2 className={cls.title}>More about me</h2>
            <div className={cls.personal}>
              <div className={cls.personal_content}>
                <p className={cls.personal_content__text}>
                  I enjoy designing embedded systems and building innovative
                  products.
                </p>
                <p className={cls.personal_content__text}>
                  I work at ni2o developing brain–computer tech and innovative
                  solutions to help cure Alzheimer’s and Parkinson’s.
                </p>
                <p className={cls.personal_content__text}>
                  Outside of work I travel, hike, read books, and do rock
                  climbing.
                </p>
              </div>
              <div className={cls.personal_image}>
                <img src={ProfileImage} avatar={"Sols portrait"} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <PersonalTable />
    </>
  );
};
