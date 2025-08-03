import cls from "./header.module.scss";
import { menuItems } from "src/consts";
import { homePath } from "src/consts/routePaths.js";
import { Link } from "react-router";
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

export const Header = () => {
  return (
    <motion.header
      initial={"hidden"}
      animate={"visible"}
      className={cls.header}
    >
      <div className="container">
        <div className={cls.header__wrapper}>
          <motion.div variants={textAnimation} custom={1}>
            <Link to={homePath()} className={cls.logo}>
              Sols Miziev
            </Link>
          </motion.div>

          <motion.nav
            variants={textAnimation}
            custom={1}
            className={cls.header_nav}
          >
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                className={cls.header_nav__link}
              >
                {item.label}
              </Link>
            ))}
          </motion.nav>
        </div>
      </div>
    </motion.header>
  );
};
