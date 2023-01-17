import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="footer__box">
        <div className="footer__wrap">
          <div>© Управление Федерального казначейства</div>
          <a href className="yellow">
            248009, г.Калуга, Грабцевское шоссе, д.39
          </a>
        </div>
        <div className="footer__wrap links">
          <a href="#">О сайта</a>
          <a href="#">Обратная связь по сайту</a>
          <a href="#">Статистика</a>
          <a href="#">Карта сайта</a>
          <a href="#">RSS</a>
        </div>
        <div className="footer__wrap distance">
          <div>Телефон приемной:</div>
          <a href="tel:8(4842) 71-97-77" className="yellow">
            8(4842) 719-777
          </a>
        </div>
        <div className="footer__wrap distance">
          <a href="#">
            <img src="img/informer.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
