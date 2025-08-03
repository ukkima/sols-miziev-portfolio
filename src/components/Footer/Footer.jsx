import cls from "./footer.module.scss";
import { footerMenuItems } from "src/consts/index.js";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={cls.footer__wrapper}>
          <h6 className={cls.footer_message}>Made with love for Sols</h6>
          <div className={cls.footer_menu}>
            {footerMenuItems.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target={"_blank"}
                style={{ "--hover-link-color": item.color }}
                className={cls.footer_menu__link}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
