import cls from "./homepage.module.scss";
import { ResearchList } from "src/components/index.js";
import { motion } from "motion/react";

const textAnimation = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { type: "spring", delay: custom * 0.2 },
  }),
};

export const HomePage = () => {
  return (
    <>
      <motion.section
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className={cls.intro__wrapper}>
            <motion.h1
              variants={textAnimation}
              custom={1}
              className={cls.title}
            >
              Hello, I’m{" "}
              <strong className={cls.title_accent}>Sols Miziev</strong>
            </motion.h1>
            <motion.p
              variants={textAnimation}
              custom={2}
              className={cls.description}
            >
              I am a neuroengineer and Director of Neuroimplant Development for
              the treatment of Alzheimer’s and Parkinson’s diseases. I graduated
              from Oxford College, hold a Bachelor's and a Master's degree from
              the University of Edinburgh, and am currently pursuing a PhD at
              the University of Oxford.
            </motion.p>
          </div>
        </div>
      </motion.section>
      <ResearchList />
    </>
  );
};
