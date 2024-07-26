import React, { useEffect } from 'react';
import { parseImgSrc } from '../untils';
import useNavigate, { ZMPNavigationFunction } from 'zmp-ui/useNavigate';
import { useLocation } from 'react-router-dom';
import { ROUTE } from '../enums';
import { Page } from 'zmp-ui';

function checkActiveRoute(path: string) {
  const activeCls: string = 'tt-navbar-item-active';

  const routeKey: string[] = Object.keys(ROUTE);
  for (let i = 0; i < routeKey.length; i++) {
    const route = ROUTE[routeKey[i]];
    const element: HTMLButtonElement = document.getElementById('navbar-' + route) as any;
    if (element) {
      const _class = element.className;
      if (path.includes(route)) {
        _class.includes(activeCls) ? null : element.className = element.className + ' ' + activeCls;
      } else {
        element.className = element.className.replace(activeCls, '');
      }
    }
  }
}

function goToURL(path: string, navigate: ZMPNavigationFunction) {
  navigate('/' + path);
  checkActiveRoute(path);
}

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    checkActiveRoute(location.pathname);
  }, []);
  
  return (
    <aside className='tt-navbar'>
      <button id='navbar-shoping' onClick={()=> goToURL(ROUTE.SHOPING, navigate)} className='tt-navbar-item'>
        <img src={parseImgSrc('shopping-cart')} alt="shopping-cart.svg" />
      </button>
      <button id='navbar-setting' onClick={()=> goToURL(ROUTE.SETTING, navigate)} className='tt-navbar-item'>
        <img src={parseImgSrc('profile')} alt="profile.svg" />
      </button>
    </aside>
  );
}

export default NavigationBar;