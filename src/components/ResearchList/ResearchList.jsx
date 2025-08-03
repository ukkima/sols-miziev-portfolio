import cls from "./researchlist.module.scss";
import { researchListItems } from "src/consts/index.js";
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

export const ResearchList = () => {
  return (
    <section id={"research"} className={cls.research}>
      <div className="container">
        <div className={cls.research__wrapper}>
          <motion.h2
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{
              once: true,
            }}
            variants={textAnimation}
            custom={1}
            className={cls.title}
          >
            Research
          </motion.h2>

          <ul className={cls.research_list}>
            {researchListItems.map((item) => {
              return (
                <motion.li
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{
                    once: true,
                    amount: item.amount,
                  }}
                  variants={textAnimation}
                  custom={1}
                  key={item.id}
                  className={cls.research_list__item}
                >
                  <a
                    href={item.link}
                    target={"_blank"}
                    className={cls.research_list__link}
                  >
                    {item.label}
                  </a>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
