import React, { useEffect } from "react";
import "./forma.css";

export const Forma = () => {
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
    openTab(null, "News");
  }, []);

  return (
    <div class="middle">
      <div class="middle_left">
        <a href="#" class="yellow-border">
          Взыскания на средства Федерального бюджета
        </a>
        <a href="#">Обращения граждан и организаций</a>
      </div>
      <div class="middle_right">
        <div>
          <a class="main-link" href="#">
            Главная
          </a>
          <p class="form-appeal">Форма обращения</p>
          <p class="appeal">
            Ваше обращение, оставленное на нашем сайте, будет рассмотрено в
            соответствии с требованиями законодательства Российской Федерации и
            ведомственных нормативных правовых актов.
          </p>
          <p class="appeal">
            Просим Вас с пониманием отнестись к указанным требованиям
            законодательства, внимательно заполнить все предложенные реквизиты и
            четко формулировать суть проблемы. Это значительно ускорит
            рассмотрение Вашего обращения по существу.
          </p>
        </div>
        <div class="tab">
          <button
            class="tab-links active"
            onClick={(e) => {
              openTab(e, "News");
            }}
          >
            Физическим лицам
          </button>
          <button
            class="tab-links"
            onClick={(e) => {
              openTab(e, "Docs");
            }}
          >
            Юридическим лицам
          </button>
        </div>
        <div id="News" class="tab-content">
          <input
            name="surname"
            type="text"
            maxlength="32"
            placeholder="Фамилия"
          />
          <input name="name" type="text" maxlength="32" placeholder="Имя" />
          <input
            name="middle-name"
            type="text"
            maxlength="32"
            placeholder="Отчество"
          />
          <input name="city" type="text" maxlength="32" placeholder="Город" />
          <input
            name="address"
            type="text"
            maxlength="32"
            placeholder="Адрес"
          />
          <input
            name="index"
            type="number"
            maxlength="32"
            placeholder="Индекс"
          />
          <input name="tel" type="tel" maxlength="32" placeholder="Телефон" />
          <input
            name="email"
            type="email"
            maxlength="32"
            placeholder="E-mail"
          />
          <textarea
            class="early"
            name="txtpole"
            id="txtpole"
            placeholder="Ранние обращения в органы государственной власти"
          ></textarea>
          <textarea
            class="text"
            name="txtpole"
            id="txtpole"
            placeholder="Текст обращения"
          ></textarea>
          <div class="middle__form">
            <a href="#">
              <b>ОТПРАВИТЬ</b>
            </a>
          </div>
        </div>
        <div id="Docs" class="tab-content">
          <input
            name="name-firm"
            type="text"
            maxlength="32"
            placeholder="Наименование организации"
          />
          <input
            name="surname"
            type="text"
            maxlength="32"
            placeholder="Фамилия руководителя"
          />
          <input
            name="name"
            type="text"
            maxlength="32"
            placeholder="Имя руководителя"
          />
          <input
            name="middle-name"
            type="text"
            maxlength="32"
            placeholder="Отчество руководителя"
          />
          <input name="city" type="text" maxlength="32" placeholder="Город" />
          <input
            name="address"
            type="text"
            maxlength="32"
            placeholder="Адрес организации"
          />
          <input
            name="index"
            type="number"
            maxlength="32"
            placeholder="Индекс"
          />
          <input
            name="tel"
            type="tel"
            maxlength="32"
            placeholder="Контактный телефон"
          />
          <input
            name="email"
            type="email"
            maxlength="32"
            placeholder="E-mail"
          />
          <input
            name="surname"
            type="text"
            maxlength="100"
            placeholder="Фамилия, имя, отчество исполнителя"
          />
          <textarea
            class="early"
            name="txtpole"
            id="txtpole"
            placeholder="В какие органы государственной власти Вы обращались и когда"
          ></textarea>
          <textarea
            class="text"
            name="txtpole"
            id="txtpole"
            placeholder="Сообщение"
          ></textarea>
          <div class="middle__form">
            <a href="#">
              <b>ОТПРАВИТЬ</b>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
