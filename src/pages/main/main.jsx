import React, { useEffect } from "react";
import "./main.css";

export const Main = () => {
  let slideIndex = 0;

  const showSlides = () => {
    var i = 0;
    var slides = Array.from(document.getElementsByClassName("slide"));

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    if (slideIndex > slides.length) {
      slideIndex = 0;
    }

    slides[slideIndex].style.display = "flex";
  };

  const plusSlides = (n) => {
    slideIndex += n;
    showSlides();
  };

  const openTab = (evt, tabName) => {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    if (evt) {
      tablinks = document.getElementsByClassName("tab-links");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
    }
    document.getElementById(tabName).style.display = "block";
    if (evt) {
      evt.currentTarget.className += " active";
    }
  };

  useEffect(() => {
    showSlides(slideIndex);
    openTab(null, "News");
  }, []);

  return (
    <div className="middle-main">
      <div className="middle__box">
        <div className="middle__box_left">
          <div className="tab">
            <button
              className="tab-links active"
              onClick={(e) => {
                openTab(e, "News");
              }}
            >
              Новости
            </button>
            <button
              className="tab-links"
              onClick={(e) => {
                openTab(e, "Docs");
              }}
            >
              Документы
            </button>
          </div>
          <div id="News" className="tab-content">
            <div className="middle__box_slides">
              <div className="slide fade">
                <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1567633/">
                  <img src="img/sl1.jpg" alt="" className="slide_img" />
                </a>
                <p>
                  Участие УФК по Калужской области в проекте Общероссийского
                  народного фронта «Все для Победы!»
                </p>
              </div>
              <div className="slide fade">
                <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1567633/">
                  <img src="img/sl2.jpg" alt="" className="slide_img" />
                </a>
                <p>Парк «Патриот»</p>
              </div>
              <div className="slide fade">
                <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1567633/">
                  <img src="img/sl3.jpg" alt="" className="slide_img" />
                </a>
                <p>
                  Информация о заседании Коллегии в УФК по Калужской области
                </p>
              </div>
              <div className="slide fade">
                <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1567633/">
                  <img src="img/sl4.jpg" alt="" className="slide_img" />
                </a>
                <p>
                  Поздравление с Днем России руководителя Управления
                  Федерального казначейства по Калужской области Н.П. Хвостенко
                </p>
              </div>
              <div className="slide fade">
                <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1567633/">
                  <img src="img/sl5.jpg" alt="" className="slide_img" />
                </a>
                <p>
                  Информация об участии во Всероссийском совещании с советами
                  ветеранов органов Федерального казначейства
                </p>
              </div>
              <a
                className="prev"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  plusSlides(-1);
                }}
              >
                ❮
              </a>
              <a
                className="next"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  plusSlides(1);
                }}
              >
                ❯
              </a>
            </div>
            <div className="middle__box_news">
              <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1570556/">
                Об участии руководителя УФК по Калужской области Н.П.Хвостенко в
                координационном совещании руководителей органов государственной
                власти Калужской области и территориальных федеральных органов
                государственной власти по Калужской области
              </a>
              <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1570346/">
                Информация об о заседании Коллегии в УФК по Калужской области
              </a>
              <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1570023/">
                Акция «Лапа помощи»
              </a>
              <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1569819/">
                Об участии руководителя УФК по Калужской области Н.П.Хвостенко в
                заседании Правительства Калужской области
              </a>
              <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1569649/">
                Акция «Зеленый месяц»
              </a>
              <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1569225/">
                Об участии руководителя УФК по Калужской области Н.П.Хвостенко в
                заседании Правительства Калужской области
              </a>
              <a href="https://kaluga.roskazna.gov.ru/novosti-i-soobshheniya/novosti/1568799/">
                Об участии руководителя УФК по Калужской области Н.П.Хвостенко в
                заседании Правительства Калужской области
              </a>
            </div>
          </div>
          <div id="Docs" className="tab-content">
            <div className="middle__box_news">
              <a href="https://kaluga.roskazna.gov.ru/upload/iblock/931/pismo_08072022_146fz_260_13_07_2022_ver1_.pdf">
                Совместное письмо Минфина России и Федерального казначейства от
                08.07.2022 № 09-02-09/66304 и № 07-04-05/04-16919 «О федеральном
                законе от 28.05.2022 №146-ФЗ и Постановлении Правительства РФ от
                01.07.2022 № 1182» <span className="icon">PDF</span>
              </a>
              <a href="https://kaluga.roskazna.gov.ru/upload/iblock/ec7/Federalnyy_zakon_28052022_146_FZ_219_01_06_2022_ver1_.pdf">
                Федеральный закон от 28.05.2022 № 146-ФЗ (осуществление
                казначейского сопровождения целевых средств в 2022 году,
                предоставляемых на основании контрактов (договоров)){" "}
                <span className="icon">PDF</span>
              </a>
              <a href="https://kaluga.roskazna.gov.ru/upload/iblock/88a/prilogenie_zayavlenie_bank_135_01_04_2022_ver1_.pdf">
                Заявление на получение бизнес-карты (Приложение 8){" "}
                <span className="icon">PDF</span>
              </a>
              <a href="https://kaluga.roskazna.gov.ru/upload/iblock/286/Pismo_121_22_03_2022_ver1_.pdf">
                Письмо Банка ВТБ № 11/422000 от 01.02.2022 г.{" "}
                <span className="icon">PDF</span>
              </a>
              <a href="https://kaluga.roskazna.gov.ru/upload/iblock/5d9/pismo_MFRF_73_17_02_2022_ver1_.pdf">
                Письмо Министерства финансов Российской Федерации от 30.12.2021
                № 09-02-06/108295 «Об условиях, включаемых в государственные
                контракты, соглашения (договоры), средства по которым подлежат
                казначейскому сопровождению» <span className="icon">PDF</span>
              </a>
            </div>
          </div>
        </div>
        <div className="middle__box_right">
          <div className="middle__section">
            <img src="img/leader.jpg" alt="" />
            <div>
              Руководитель УФК по Калужской области
              <br />
              <a
                href="https://kaluga.roskazna.gov.ru/o-kaznachejstve/rukovodstvo/402548/#biography-b"
                className="leader"
              >
                Хвостенко Николай Петрович
              </a>
            </div>
          </div>
          <div className="middle__section">
            <div className="wrap">
              <a href="tel:+74842719777" className="phone">
                8 (4842) 719 - 777
              </a>
              <div className="location">
                248009, г.Калуга, Грабцевское шоссе, д.39
              </div>
            </div>
            <img src="img/logo.jpg" alt="" className="logo" />
          </div>
        </div>
      </div>
      <div className="middle__fast-links">
        <div className="tab-vertical">
          <button
            className="tab-links"
            onClick={(e) => {
              openTab(e, "Customers");
            }}
          >
            Клиентам ФК
          </button>
          <button
            className="tab-links"
            onClick={(e) => {
              openTab(e, "Levy");
            }}
          >
            Взыскателям
          </button>
          <button
            className="tab-links"
            onClick={(e) => {
              openTab(e, "IT");
            }}
          >
            ИТ-специалистам
          </button>
          <button
            className="tab-links"
            onClick={(e) => {
              openTab(e, "Employees");
            }}
          >
            Сотрудникам ФК
          </button>
        </div>
        <div id="Customers" className="tab-cont">
          <a href="#">Удостоверяющий центр</a>
          <a href="#">СУФД-онлайн</a>
          <a href="#">Новости и сообщения</a>
          <a href="#">Документы</a>
          <a href="#">Внешняя оценка деятельности ФК (Анкетирование)</a>
        </div>
        <div id="Levy" className="tab-cont">
          <a href="#">Взыскание на средства федерального бюджета</a>
          <a href="#">Работа с исполнительными документами</a>
        </div>
        <div id="IT" className="tab-cont">
          <a href="#">ГИС</a>
          <a href="#">Документы (информационные технологии)</a>
          <a href="#">Открытые данные</a>
        </div>
        <div id="Employees" className="tab-cont">
          <a href="#">О казначействе</a>
          <a href="#">Новости и сообщения</a>
          <a href="#">Документы</a>
          <a href="#">Госслужба в ФК</a>
          <a href="#">Профсоюз</a>
        </div>
      </div>
      <div className="middle__last-box">
        <div>
          <a href="#">
            <img src="img/Untitled.png" alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="img/Untitled1.png" alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="img/Untitled2.png" alt="" />
          </a>
        </div>
        <div>
          <a href="#">
            <img src="img/Untitled3.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
