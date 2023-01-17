import React from "react";
import { Route, Routes } from "react-router-dom";
import { Apitest } from "./pages/apitest/apitest";
import { Contacts } from "./pages/contacts/contacts";
import { Cyfd } from "./pages/cyfd/cyfd";
import { CyfdForm } from "./pages/cyfdForm/cyfdForm";
import { Footer } from "./pages/footer/footer";
import { Forma } from "./pages/forma/forma";
import { Header } from "./pages/header/header";
import { Main } from "./pages/main/main";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forma" element={<Forma />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cyfd" element={<Cyfd />} />
        <Route path="/cyfd-form" element={<CyfdForm />} />
        <Route path="/apitest" element={<Apitest />} />
      </Routes>
      <Footer />
    </>
  );
};
