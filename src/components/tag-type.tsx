import React from 'react';
import { Icon } from '.';

export const TagType = (props) => {
  const {children, suffix, onClick, iconWidth} = props;

  const onClickTag = () => {
    onClick();
  };

  return (
    <button className='tt-shoping-types-item' onClick={() => onClickTag()}>
      {suffix ? (<Icon icon={suffix} width={iconWidth}></Icon>) : null}
      <span>{children}</span>
    </button>
  );
};