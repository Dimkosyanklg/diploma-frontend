import React from "react";
import "./cyfdForm.css";

export const CyfdForm = () => {
  return (
    <div className="middle">
      <div>
        <div className="middle_content">
          <input
            name="name-firm"
            type="text"
            maxLength={32}
            placeholder="Наименование организации"
          />
          <input
            name="surname"
            type="text"
            maxLength={32}
            placeholder="Фамилия"
          />
          <input name="name" type="text" maxLength={32} placeholder="Имя" />
          <input
            name="middle-name"
            type="text"
            maxLength={32}
            placeholder="Отчество"
          />
          <input
            name="email"
            type="email"
            maxLength={32}
            placeholder="E-mail"
          />
        </div>
        <div className="middle__form-cyfd">
          <a href="#">
            <b>ПОЛУЧИТЬ ДОСТУП К УЧЕТНОЙ ЗАПИСИ</b>
          </a>
        </div>
        <div className="middle__form-cyfd">
          <a href="#">
            <b>ПОЛУЧИТЬ НОВЫЙ ПАРОЛЬ</b>
          </a>
        </div>
      </div>
      <div className="middle_right">
        <div className="middle_login">
          <div className="box_content">
            <div className="fix-width">Получение запроса</div>
            <img src="img/gal.png" alt="" />
            <div className="box_time">11:09</div>
          </div>
          <div className="box_content">
            <div className="fix-width">Получение документации</div>
            <img src="img/gal.png" alt="" />
            <div className="box_time">11:09</div>
          </div>
          <div className="box_content">
            <div className="fix-width">Создание учетной записи</div>
            <img src="img/gal.png" alt="" />
            <div className="box_time">11:09</div>
          </div>
          <div className="box_content">
            <div className="fix-width">Выдача доступа</div>
            <img src="img/gal.png" alt="" />
            <div className="box_time">11:09</div>
          </div>
        </div>
        <div className="middle_password">
          <div className="box_content">
            <div className="fix-width">Получение запроса</div>
            <img src="img/gal.png" alt="" />
            <div className="box_time">11:09</div>
          </div>
          <div className="box_content">
            <div className="fix-width">Обновление пароля</div>
            <img src="img/gal.png" alt="" />
            <div className="box_time">11:09</div>
          </div>
          <div className="box_content">
            <div className="fix-width">Выдача доступа</div>
            <img src="img/gal.png" alt="" />
            <div className="box_time">11:09</div>
          </div>
        </div>
      </div>
    </div>
  );
};
