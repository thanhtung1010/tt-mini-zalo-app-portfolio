import React from 'react';
import {
  Page,
} from 'zmp-ui';
import { useRecoilValue } from 'recoil';
import { userInfo } from "zmp-sdk";
import { userState } from '../state';
import UserCard from '../components/user-card';
import { Icon, SettingList, SettingListItem } from '../components';

export const SettingPage: React.FunctionComponent = () => {
  const user = useRecoilValue<userInfo>(userState);
  // const {children} = props;
  // const navigate = useNavigate()
  return (
    <Page className="tt-setting">
      <section className="tt-setting-container tt-setting-user">
        <UserCard user={user} />
      </section>
      <section className="tt-setting-container">
        <SettingList>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Profile'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Saved Address'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Payment Methods'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Language'}</SettingListItem>
        </SettingList>
      </section>
      <section className="tt-setting-container">
        <SettingList>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Setting'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Account and Security'}</SettingListItem>
          <SettingListItem suffix={<Icon icon="arrow-right" width="20px" />}>{'Privacy'}</SettingListItem>
        </SettingList>
      </section>
    </Page>
  );
}