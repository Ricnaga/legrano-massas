import React, { ReactNode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/Home/HomePage';
import { MenuPage } from '../../pages/Menu/MenuPage';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
}

type RouterProviderProps = {
  children: ReactNode;
};

export function RouterProvider({ children }: RouterProviderProps) {
  return (
    <BrowserRouter>
      {children}
      <AllRoutes />
    </BrowserRouter>
  );
}
