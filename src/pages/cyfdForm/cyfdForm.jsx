import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createRequest, getRequests } from "../../api/api";
import { AccountStepLabels, PasswordStepLabels, userId } from "../../consts";
import "./cyfdForm.css";

export const CyfdForm = () => {
  const { register, handleSubmit, reset, formState, getValues } = useForm();
  const [requests, setRequests] = useState([]);
  const [message, setMessage] = useState();

  const accountRequest = requests.find((element) => element.requestType === 0);
  const passwordRequest = requests.find((element) => element.requestType === 1);

  useEffect(() => {
    const get = async () => {
      const data = await getRequests(userId);
      console.log(data);

      if (data) {
        const { firstName, lastName, patronymic, organization, email } =
          data[0];
        reset({ firstName, lastName, patronymic, organization, email });

        setRequests(data);
      }
    };
    get();
  }, []);

  const create = async (model) => {
    const data = await createRequest(model).then(() => {
      setMessage("Заявка создана");
    });
  };

  console.log(formState);

  return (
    <div className="middle">
      <form style={{ width: "auto", height: "auto" }}>
        <div className="middle_content">
          <input
            type="text"
            maxLength={32}
            placeholder="Наименование организации"
            {...register("organization", { required: true })}
          />
          <input
            type="text"
            maxLength={32}
            placeholder="Фамилия"
            {...register("lastName", { required: true })}
          />
          <input
            type="text"
            maxLength={32}
            placeholder="Имя"
            {...register("firstName", { required: true })}
          />
          <input
            type="text"
            maxLength={32}
            placeholder="Отчество"
            {...register("patronymic", { required: true })}
          />
          <input
            type="email"
            maxLength={32}
            placeholder="E-mail"
            {...register("email", { required: true })}
          />
        </div>
        {message}
        <div className="middle__form-cyfd">
          <button
            onClick={handleSubmit((model) => {
              const request = {
                ...model,
                userId,
                isCompleted: false,
                requestType: 0,
                steps: [],
              };
              create(request);
            })}
          >
            <b>ПОЛУЧИТЬ ДОСТУП К УЧЕТНОЙ ЗАПИСИ</b>
          </button>
        </div>
        <div className="middle__form-cyfd">
          <button
            onClick={handleSubmit((model) => {
              const request = {
                ...model,
                userId,
                isCompleted: false,
                requestType: 1,
                steps: [],
              };
              create(request);
            })}
          >
            <b>ПОЛУЧИТЬ НОВЫЙ ПАРОЛЬ</b>
          </button>
        </div>
      </form>
      <div className="middle_right">
        <div className="middle_login">
          {Object.entries(AccountStepLabels).map(([key, value]) => (
            <div className="box_content" key={key}>
              <div className="fix-width">{value}</div>
              {accountRequest?.steps?.find((value) => value.step == key) && (
                <>
                  <img src="img/gal.png" alt="" />
                  <div className="box_time">
                    {new Date(
                      accountRequest?.steps?.find(
                        (value) => value.step == key
                      ).completeDate
                    ).toLocaleString()}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="middle_password">
          {Object.entries(PasswordStepLabels).map(([key, value]) => (
            <div className="box_content" key={key}>
              <div className="fix-width">{value}</div>
              {passwordRequest?.steps?.find((value) => value.step == key) && (
                <>
                  <img src="img/gal.png" alt="" />
                  <div className="box_time">
                    {new Date(
                      passwordRequest?.steps?.find(
                        (value) => value.step == key
                      ).completeDate
                    ).toLocaleString()}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
