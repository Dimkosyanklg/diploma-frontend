import React from "react";
import { completeRequest, updateRequest } from "../../api/api";
import { userId } from "../../consts";

export const Apitest = () => {
  const testAccount = async (step) => {
    const data = await updateRequest(userId, 0, step);
  };
  const testPassword = async (step) => {
    const data = await updateRequest(userId, 1, step);
  };

  const testComplete = async (type) => {
    const data = await completeRequest(userId, type);
  };

  return (
    <div>
      Восстановление учётной записи
      <div>
        <button
          onClick={() => {
            testAccount(1);
          }}
        >
          Одобрить первый шаг
        </button>
        <button
          onClick={() => {
            testAccount(2);
          }}
        >
          Одобрить второй шаг
        </button>
        <button
          onClick={() => {
            testAccount(3);
          }}
        >
          Одобрить третий шаг
        </button>
        <button
          onClick={() => {
            testAccount(4);
          }}
        >
          Одобрить четвёртый шаг
        </button>
        <button
          onClick={() => {
            testComplete(0);
          }}
        >
          Завершить заявку
        </button>
      </div>
      Восстановление пароля
      <div>
        <button
          onClick={() => {
            testPassword(1);
          }}
        >
          Одобрить первый шаг
        </button>
        <button
          onClick={() => {
            testPassword(2);
          }}
        >
          Одобрить второй шаг
        </button>
        <button
          onClick={() => {
            testPassword(3);
          }}
        >
          Одобрить третий шаг
        </button>
        <button
          onClick={() => {
            testComplete(1);
          }}
        >
          Завершить заявку
        </button>
      </div>
    </div>
  );
};
