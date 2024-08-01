import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { SettingPage, ShopingPage } from '../pages';
import ZaloPageLayout from './zalo-page-layout';

const MyApp: React.FunctionComponent = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ZaloPageLayout>
          <Routes>
            <Route path="/shoping" element={<ShopingPage></ShopingPage>}></Route>
            <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
            <Route
              path="*"
              element={<Navigate to="/shoping" replace={true} />}
            />
          </Routes>
        </ZaloPageLayout>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default MyApp;