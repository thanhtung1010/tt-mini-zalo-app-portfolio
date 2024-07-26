import React from 'react';
import { Avatar, Box, Text } from 'zmp-ui';
import { userInfo } from 'zmp-sdk';
import { parseImgSrc } from '../untils';

interface UserProps {
  user: userInfo
}

const UserCard: React.FunctionComponent<UserProps> = ({ user }) => {
  return (
    <Box className='tt-setting-avatar'>
      <Avatar story='default' online src={user.avatar.startsWith('http') ? user.avatar : undefined}>{user.avatar}</Avatar>
      <Box>
        <Text.Title>{user.name}</Text.Title>
        <Text className='tt-setting-avatar-id'>
          {user.id}
          <img src={parseImgSrc('copy-clipboard')} alt="copy-clipboard.svg" />
        </Text>
      </Box>
    </Box>
  )
};

export default UserCard;