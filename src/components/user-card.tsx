import React from 'react';
import { Avatar, Box, Text } from 'zmp-ui';
import { userInfo } from 'zmp-sdk';
import Card from './card';
import { OrderService } from '../services/order.service';

interface UserProps {
  user: userInfo
}

const UserCard: React.FunctionComponent<UserProps> = ({ user }) => {
  const orderService = new OrderService().orderService;
  return (
    <Box flex>
      <Avatar story='default' online src={user.avatar.startsWith('http') ? user.avatar : undefined}>{user.avatar}</Avatar>
      <Box ml={4}>
        <Text.Title>{user.name}</Text.Title>
        <Text>{user.id}</Text>
      </Box>
      <Card total={orderService.totalCard}></Card>
    </Box>
  )
};

export default UserCard;