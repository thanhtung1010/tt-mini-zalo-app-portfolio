import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil';
import { ShopingPage, SettingPage } from '../pages';
import PageLayout from './page-layout';

const MyApp = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <PageLayout>
          <Routes>
            <Route path="/shoping" element={<ShopingPage></ShopingPage>}></Route>
            <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
            <Route
              path="*"
              element={<Navigate to="/shoping" replace={true} />}
            />
          </Routes>
        </PageLayout>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default MyApp;