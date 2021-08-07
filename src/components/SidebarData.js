import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
  {
    title: 'HOME',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'ABOUT US',
    path: '/About',
    icon: <AiIcons.AiOutlineBulb />,
    cName: 'nav-text'
  },
  
  {
    title:'ACADEMICS' ,
    path: '/Academics',
    icon: <FaIcons.FaBookReader />,
    cName: 'nav-text'
  }
];