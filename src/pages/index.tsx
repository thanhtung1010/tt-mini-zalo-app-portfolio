import React from 'react';
import {
  List,
  Page,
  Icon,
  useNavigate
} from 'zmp-ui';
import { useRecoilValue } from 'recoil';
import { userInfo } from "zmp-sdk";
import { userState } from '../state';
import UserCard from '../components/user-card';
import { OrderService } from '../services/order.service';

export interface IBaseProd {
  id: number;
  name: string;
}

const HomePage: React.FunctionComponent = () => {
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
  // const navigate = useNavigate()
  const orderService = new OrderService().orderService;
  let total: number = 0;
  const addToCard = (id: number) => {
    orderService.addToCard(id);
    total = orderService.totalCard;
  }
  return (
    <Page className="page">
      <div className="section-container">
        <UserCard user={user} />
      </div>
      <div className="section-container">
        {total}
        <List >
          {prods.map(prod =>
            <List.Item key={prod.id} onClick={() => addToCard(prod.id)} suffix={<Icon icon="zi-arrow-right" />}>
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

export default HomePage;