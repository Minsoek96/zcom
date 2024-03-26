import {
  HomeIcon, MeIcon, MessageIcon, SearchIcon,
} from './MenuIcons';

export const menuItems = [
  {
    path: '/home',
    svg: <HomeIcon />,
    name: '홈',
  },
  {
    path: '/explore',
    svg: <SearchIcon />,
    name: '탐색하기',
  },
  {
    path: '/messages',
    svg: <MessageIcon />,
    name: '쪽지',
  },
  {
    path: '/me?.id',
    svg: <MeIcon />,
    name: '프로필',
  },
];

export const empty = {};
