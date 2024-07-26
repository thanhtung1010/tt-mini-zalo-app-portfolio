import React from 'react';
import { parseImgSrc } from '../../untils';

export const Icon = (props) => {
  const {icon, height, width} = props;
  const src = parseImgSrc(icon);
  return (
    <img src={src} alt={icon + '.svg'} height={height} width={width} />
  );
}