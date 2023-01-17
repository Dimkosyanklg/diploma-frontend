import React from "react";
import { Link } from "react-router-dom";
import "./cyfd.css";

export const Cyfd = () => {
  return (
    <div className="middle">
      <div className="middle__box">
        <div className="middle_left">
          <a href="#" className="yellow-border">
            Удостоверяющий центр
          </a>
          <a href="#">ГИС ГМП</a>
          <a href="#">ГАСУ</a>
          <a href="#">ЕИС</a>
          <a href="#">ИАС ФК</a>
          <a href="#">Официальный сайт ГМУ</a>
          <a href="#">Электронный бюджет</a>
          <a href="#">СУФД-онлайн</a>
          <a href="#">Документы</a>
          <a href="#">Автоматизация органа криптографической защиты (АОКЗ)</a>
        </div>
        <div className="middle_right">
          <div>
            <a className="main-link" href="#">
              Главная
            </a>
            <p className="cyfd">СУФД</p>
          </div>
          <div className="box__text">
            <h3>Система удаленного финансового документооборота (СУФД)</h3>
            <p>
              СУФД-online представляет собой WEB-приложение, доступное через
              Интернет, которое позволяет клиентам Федерального казначейства
              управлять своими платежами, финансовыми документами и иметь доступ
              к актуальной отчетности, сформированной в автоматизированной
              системе Федерального казначейства (АСФК)
            </p>
            <a href>Телефоны сотрудников УФК для связи</a>
            <p>
              C 01.04.2016 г. первая линия поддержки в части эксплуатации
              прикладного программного обеспечения «Система удаленного
              финансового документооборота» будет осуществляться Единым
              контактным центром по телефону 8 (800) 2222-777 в рамках
              государственного контракта от 11.02.2016 г. № УИС-12/2016 «На
              оказание услуг по организации первой линии поддержки
              информационных систем Федерального казначейства, выполнение работ
              (оказание услуг) по доработке и эксплуатации прикладного
              программного обеспечения Системы управления эксплуатацией
              Федерального казначейства».
            </p>
          </div>
          <h4>
            Для того, чтобы получить доступ к учетной записи или сменить пароль,
            нажмите на кнопку ниже:
          </h4>
          <div className="form">
            <Link to="/cyfd-form">
              <b>ПОЛУЧИТЬ ДОСТУП</b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
