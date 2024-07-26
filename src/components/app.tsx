import React from 'react';
import { Navigate, Route } from 'react-router-dom'
import { App, ZMPRouter, AnimationRoutes, SnackbarProvider } from 'zmp-ui';
import { RecoilRoot } from 'recoil';
import { HomePage, SettingPage } from '../pages';
import PageLayout from './page-layout';

const MyApp = () => {
  return (
    <RecoilRoot>
      <App >
        <SnackbarProvider>
          <ZMPRouter>
            <PageLayout>
              <AnimationRoutes>
                <Route path="/shoping" element={<HomePage></HomePage>}></Route>
                <Route path="/setting" element={<SettingPage></SettingPage>}></Route>
                <Route
                  path="*"
                  element={<Navigate to="/shoping" replace={true} />}
                />
              </AnimationRoutes>
            </PageLayout>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </RecoilRoot>
  );
}
export default MyApp;