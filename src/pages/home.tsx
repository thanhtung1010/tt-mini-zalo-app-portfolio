import React from 'react';
import {
  List,
  Page,
  Icon,
} from 'zmp-ui';
import { useRecoilValue } from 'recoil';
import { userInfo } from "zmp-sdk";
import { userState } from '../state';
import UserCard from '../components/user-card';

export interface IBaseProd {
  id: number;
  name: string;
}

export const HomePage: React.FunctionComponent = () => {
  const user = useRecoilValue<userInfo>(userState);
  const prods: IBaseProd[] = [
    {
      name: 'About',
      id: 1
    },
    {
      name: 'User',
      id: 2
    },
  ];
  // const {children} = props;
  // const navigate = useNavigate()
  return (
    <Page className="tt-page">
      <div className="tt-section-container">
        <UserCard user={user} />
        { 'home' }
      </div>
      <div className="tt-section-container">
        <List >
          {prods.map(prod =>
            <List.Item key={prod.id} suffix={<Icon icon="zi-arrow-right" />}>
              <div>{prod.name}</div>
            </List.Item>
          )}
          {/* <List.Item suffix={<Icon icon="zi-arrow-right"/>}>
        <div  onClick={()=>navigate('/about')}>About</div>
        <div>About</div>
      </List.Item>
      <List.Item suffix={<Icon icon="zi-arrow-right"/>}>
        <div onClick={()=>navigate('/user')}>User</div>
        <div>User</div>
      </List.Item> */}
        </List>
      </div>
    </Page>
  );
}