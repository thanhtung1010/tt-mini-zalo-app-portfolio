import React from 'react';
import { IZaloUser } from '../interfaces';
import { Avatar } from '.';

interface UserProps {
  user: IZaloUser
}

const UserCard: React.FunctionComponent<UserProps> = ({ user }) => {
  return (
    <Avatar user={user}></Avatar>
    // <Box className='tt-setting-avatar'>
    //   <Avatar story='default' online src={user.avatar.startsWith('http') ? user.avatar : undefined}>{user.avatar}</Avatar>
    //   <Box>
    //     <Text.Title>{user.name}</Text.Title>
    //     <Text className='tt-setting-avatar-id'>
    //       {user.id}
    //       <img src={parseImgSrc('copy-clipboard')} alt="copy-clipboard.svg" />
    //     </Text>
    //   </Box>
    // </Box>
  )
};

export default UserCard;