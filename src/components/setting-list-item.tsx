import React from 'react';

export const SettingListItem = (props) => {
  const {children, suffix} = props;
  return (
    <li className='tt-setting-list-item'>
      <div className='tt-setting-list-item-right'>
        <div className='tt-setting-list-item-content'>{children}</div>
        <div className='tt-setting-list-item-suffix'>{suffix}</div>
      </div>
    </li>
  );
}