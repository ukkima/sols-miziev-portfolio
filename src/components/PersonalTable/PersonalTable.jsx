import cls from "./personaltable.module.scss";
import { tableItems } from "src/consts/index.js";
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

export const PersonalTable = () => {
  return (
    <section className={cls.table}>
      <div className="container">
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          variants={textAnimation}
          viewport={{ once: true }}
          className={cls.table__wrapper}
        >
          {tableItems.map((item) => (
            <div key={item.id} className={cls.cell}>
              <h6 className={cls.cell_title}>{item.title}</h6>
              <p className={cls.cell_description}>{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
