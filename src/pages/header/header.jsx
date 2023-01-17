import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <header>
      <div className="header__wrap">
        <div className="nav">
          <div>
            Перейти на
            <a className="nav_website" href="#">
              roskazna.gov.ru
            </a>
          </div>
          <div>
            <a className="nav_territories" href="#">
              Территориальные органы и подведомственные учреждения
            </a>
          </div>
          <div>
            <a className="item" href="#">
              Форум
            </a>
          </div>
          <div>
            <Link to="/contacts">Контакты</Link>
          </div>
        </div>
      </div>
      <div className="header__block">
        <div className="header__logo">
          <img src="img/logo.png" alt="" />
          <a className="header__text" href="index.html">
            УФК по Калужской области
          </a>
        </div>
        <div className="header__search-form">
          <form action method="get">
            <input
              className="header__search-form_input"
              name="s"
              placeholder="Поиск"
              type="search"
            />
            <button className="header__search-form_button" type="submit" />
          </form>
          <div className="header_advanced-search">
            <a className="item" href="#">
              Расширенный поиск
            </a>
          </div>
        </div>
      </div>
      <div className="nav__main">
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">Об УФК</a>
          </button>
          <div className="nav__dropdown_content">
            <a href="#">Контактная информация</a>
          </div>
        </div>
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">Новости</a>
          </button>
          <div className="nav__dropdown_content">
            <a href="#">Новости</a>
          </div>
        </div>
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">Документы</a>
          </button>
          <div className="nav__dropdown_content">
            <a href="#">Архив</a>
          </div>
        </div>
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">Исполнение бюджетов</a>
          </button>
          <div className="nav__dropdown_content">
            <a href="#">Федеральный бюджет</a>
          </div>
        </div>
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">Финансовые операции</a>
          </button>
          <div className="nav__dropdown_content">
            <a href="#">Бюджетные кредиты</a>
          </div>
        </div>
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">ГИС</a>
          </button>
          <div className="nav__dropdown_content">
            <a href="#">Документы</a>
            <Link to="/cyfd">СУФД-онлайн</Link>
          </div>
        </div>
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">Иная деятельность</a>
          </button>
          <div className="nav__dropdown_content">
            <a href="#">Общественная деятельность</a>
          </div>
        </div>
        <div className="nav__dropdown">
          <button className="nav__dropdown_button">
            <a href="#">Прием обращений</a>
          </button>
          <div className="nav__dropdown_content">
            <Link to="/forma">Обращение граждан и организаций</Link>
          </div>
        </div>
      </div>
    </header>
  );
};
