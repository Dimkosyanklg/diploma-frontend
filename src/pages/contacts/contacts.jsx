import React from "react";
import { Link } from "react-router-dom";
import "./contacts.css";

export const Contacts = () => {
  return (
    <div className="middle">
      <div className="middle__box">
        <div className="middle_left">
          <a href="#" className="yellow-border">
            Положение об УФК
          </a>
          <a href="#">Руководство</a>
          <a href="#">Структура УФК</a>
          <a href="#">Планы и отчеты</a>
          <a href="#">Коллегиальные и совещательные органы</a>
          <a href="#">История</a>
          <a href="#">Контактная информация</a>
        </div>
        <div className="middle_right">
          <div>
            <a className="main-link" href="#">
              Главная
            </a>
            <p className="contact-info">Контактная информация</p>
          </div>
          <div className="middle__strings">
            <div className="row">
              <div className="middle__wrap">
                <p>
                  <b>Адрес:</b>
                </p>
                <p>248009, г.Калуга, Грабцевское шоссе, д.39</p>
                <div className="opening-hours">
                  <div>
                    <p> Часы работы:</p>
                  </div>
                  <div>
                    <p>Пн-чт</p>
                    <p>с 8-00 до 17-15</p>
                  </div>
                  <div>
                    <p>Пт</p>
                    <p>с 8-00 до 16-00</p>
                  </div>
                  <div>
                    <p>Перерыв</p>
                    <p>с 13-00 до 14-00</p>
                  </div>
                </div>
              </div>
              <div className="middle__form-contacts">
                <Link to="/forma">
                  <b>ФОРМА ОБРАЩЕНИЯ</b>
                </Link>
              </div>
            </div>
            <div className="middle__contacts">
              <div className="indent">
                <p className="reception yellow-border">Телефон:</p>
                <a href="tel:8(4842) 71-97-77">
                  {" "}
                  <b>8(4842) 719-777</b>
                </a>
              </div>
              <div>
                <p>
                  Факс: <a href> 8(4842) 719-777</a>
                </p>
              </div>
              <div>
                <p>
                  Эл. почта:{" "}
                  <a href="mailto:ufk37@roskazna.ru">ufk37@roskazna.ru</a>
                </p>
              </div>
            </div>
          </div>
          <div className="middle__tables">
            <button
              className="dropdown"
              onClick={(e) => {
                document.getElementById("myDropdown1").classList.toggle("show");
              }}
            >
              Телефоны УФК по Калужской области
            </button>
            <div className="dropdown-content" id="myDropdown1">
              <table>
                <tbody>
                  <tr>
                    <td>Руководитель Управления</td>
                    <td> Хвостенко Николай Петрович </td>
                    <td>8(4842)71-97-77</td>
                  </tr>
                  <tr>
                    <td>Заместитель руководителя</td>
                    <td> Анисимова Алина Александровна </td>
                    <td>8(4842)71-97-01</td>
                  </tr>
                  <tr>
                    <td>Заместитель руководителя</td>
                    <td> Балыбердина Наталья Васильевна </td>
                    <td>8(4842)71-97-02</td>
                  </tr>
                  <tr>
                    <td>Заместитель руководителя</td>
                    <td> Васин Алексей Николаевич </td>
                    <td>8(4842)71-97-03</td>
                  </tr>
                  <tr>
                    <td>Заместитель руководителя </td>
                    <td> Володин Валерий Алексеевич</td>
                    <td>8(4842)71-95-86</td>
                  </tr>
                  <tr>
                    <td>Начальник административно-финансового отдела</td>
                    <td> Дмитриева Светлана Викторовна </td>
                    <td>8(4842)71-97-58</td>
                  </tr>
                  <tr>
                    <td>
                      Начальник отдела бюджетного учета и отчетности по
                      операциям бюджетов
                    </td>
                    <td> Кравченко Наталья Вячеславовна </td>
                    <td>8(4842)71-97-07</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела доходов</td>
                    <td> Славкина Антонина Алексеевна </td>
                    <td>8(4842)71-97-18</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела расходов</td>
                    <td> Ермакова Наталья Анатольевна </td>
                    <td>8(4842)71-97-25</td>
                  </tr>
                  <tr>
                    <td>Начальник операционного отдела</td>
                    <td> Костылева Ольга Владимировна </td>
                    <td>8(4842)71-97-42</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела внутреннего контроля и аудита</td>
                    <td> Коростелёв Игорь Анатольевич</td>
                    <td>8(4842)71-97-27</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела обслуживания силовых ведомств</td>
                    <td> Артамонова Любовь Леонидовна </td>
                    <td>8(4842)71-97-50</td>
                  </tr>
                  <tr>
                    <td>
                      Начальник отдела кассового обслуживания исполнения
                      бюджетов
                    </td>
                    <td> Доценко Дмитрий Вадимович </td>
                    <td>8(4842)71-97-30</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела информационных систем</td>
                    <td> Сеничкин Олег Викторович </td>
                    <td>8(4842)71-97-19</td>
                  </tr>
                  <tr>
                    <td>Начальник организационно – аналитического отдела</td>
                    <td> Сенчукова Инна Ивановна </td>
                    <td>8(4842)71-95-76</td>
                  </tr>
                  <tr>
                    <td>
                      Начальник отдела централизованной бухгалтерии - главный
                      бухгалтер
                    </td>
                    <td> Рыжова Наталья Николаевна </td>
                    <td>8(4842)71-97-11</td>
                  </tr>
                  <tr>
                    <td>Начальник юридического отдела</td>
                    <td> Финакина Елена Юсуповна </td>
                    <td>8(4842)71-97-04</td>
                  </tr>
                  <tr>
                    <td>
                      Начальник отдела режима секретности и безопасности
                      информации
                    </td>
                    <td> Чуйкин Виталий Юрьевич </td>
                    <td>8(4842)71-97-53</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела ведения федеральных реестров</td>
                    <td> Андрюхина Татьяна Геннадьевна </td>
                    <td>8(4842)71-97-60</td>
                  </tr>
                  <tr>
                    <td>
                      Начальник отдела государственной гражданской службы и
                      кадров
                    </td>
                    <td> Андрианова Елена Юрьевна </td>
                    <td>8(4842)71-97-74</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела технологического обеспечения</td>
                    <td> Арсеева Екатерина Юрьевна </td>
                    <td>8(4842)71-97-73</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела казначейского сопровождения</td>
                    <td> Белова Оксана Юрьевна </td>
                    <td>8(4842) 71-95-63</td>
                  </tr>
                  <tr>
                    <td>
                      Начальник контрольно-ревизионного отдела в
                      финансово-бюджетной сфере
                    </td>
                    <td> Афоникова Людмила Борисовна </td>
                    <td>8(4842) 71-95-87</td>
                  </tr>
                  <tr>
                    <td>
                      Начальник отдела мобилизационной подготовки и гражданской
                      обороны
                    </td>
                    <td> Гребенников Владимир Александрович </td>
                    <td>8(4842) 71-97-78</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="middle__tables">
            <button
              className="dropdown break"
              onClick={(e) => {
                document.getElementById("myDropdown2").classList.toggle("show");
              }}
            >
              Территориальные отделы УФК по Калужской области
            </button>
            <div className="dropdown-content" id="myDropdown2">
              <table>
                <tbody>
                  <tr>
                    <td>
                      Начальник отдела №4 Николаева Светлана Александровна
                    </td>
                    <td>
                      {" "}
                      249832, Калужская обл., г. Кондрово, ул. Комсомольская,
                      д.1{" "}
                    </td>
                    <td>8(4843)23-67-74</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249950, Калужская обл., г. Медынь, ул. Луначарского, д.47{" "}
                    </td>
                    <td>8(4843)32-11-27</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела №7 Кашников Владимир Вячеславович</td>
                    <td>
                      {" "}
                      249191, Калужская обл., г. Жуков, ул. Коммунистическая,
                      д.15{" "}
                    </td>
                    <td>8(4843)25-64-81</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249010, Калужская обл., г. Боровск, ул. Московская, д.30{" "}
                    </td>
                    <td>8(4843)84-37-56</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249096, Калужская обл., г. Малоярославец, ул. Успенская,
                      д.11{" "}
                    </td>
                    <td>8(4843)12-30-04</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела №9 Столярова Елена Анатольевна</td>
                    <td>
                      {" "}
                      249722, Калужская обл., г. Козельск, ул. Б. Советская,
                      д.114{" "}
                    </td>
                    <td>8(4844)22-17-45</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249130, Калужская обл., с. Перемышль, ул. Ленина, д.57{" "}
                    </td>
                    <td>8(4844)13-14-07</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249750, Калужская обл., с. Ульяново, ул. Перспективная,
                      д.17{" "}
                    </td>
                    <td>8(4844)32-19-95</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249800, Калужская обл., п. Ферзиково, ул. Карпова, д.27{" "}
                    </td>
                    <td>8(4843)73-17-06</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела №17 Истархова Татьяна Реональдовна</td>
                    <td>
                      {" "}
                      249275, Калужская обл., г. Сухиничи, ул.10-й Пушечной
                      артбригады, д.2а{" "}
                    </td>
                    <td>8(4845)15-27-41</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249210, Калужская обл., п. Бабынино, ул. Ленина, д.14{" "}
                    </td>
                    <td>8(4844)82-16-24</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249240, Калужская обл., г. Мещовск, ул. Энгельса, д.6{" "}
                    </td>
                    <td>8(4844)69-29-72</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249930, Калужская обл., г. Мосальск, ул. Советская, д.4{" "}
                    </td>
                    <td>8(4845)22-16-13</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела №24 Кривогубченко Ирина Дмитриевна</td>
                    <td>
                      {" "}
                      249440, Калужская обл., г. Киров, ул. Пролетарская, д.50{" "}
                    </td>
                    <td>8(4845)65-22-89</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249650, Калужская обл., п. Барятино, ул.40 лет Победы,
                      д.14{" "}
                    </td>
                    <td>8(4845)42-42-68</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249500, Калужская обл., п. Бетлица, ул. Новосибирская,
                      д.21{" "}
                    </td>
                    <td>8(4845)72-15-69</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249610, Калужская обл., г. Спас-Деменск, ул. Садовая, д.2{" "}
                    </td>
                    <td>8(4845)52-22-87</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела №25 Потапова Алена Ивановна</td>
                    <td>
                      {" "}
                      249037, Калужская обл., г. Обнинск, ул. Курчатова, д.5{" "}
                    </td>
                    <td>8(4843)94-96-52</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249100, Калужская обл., г. Таруса, ул. Ленина, д.8{" "}
                    </td>
                    <td>8(4843)52-58-40</td>
                  </tr>
                  <tr>
                    <td>Начальник отдела №26 Зайцева Ольга Алексеевна</td>
                    <td>
                      {" "}
                      249400, Калужская обл., г. Людиново, ул .Маяковского, д.5{" "}
                    </td>
                    <td>8(4844)46-47-75</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249300, Калужская обл., п. Думиничи, 1-й Ленинский пер.,
                      д.4а{" "}
                    </td>
                    <td>8(4844)79-11-49</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249340 Калужская обл., г. Жиздра, ул. Коммунистическая,
                      д.23{" "}
                    </td>
                    <td>8(4844)52-14-96</td>
                  </tr>
                  <tr>
                    <td>Удаленное рабочее место</td>
                    <td>
                      {" "}
                      249360, Калужская обл., с. Хвастовичи, ул. Циолковского,
                      д.11а{" "}
                    </td>
                    <td>8(4845)39-11-47</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
