import {
  HomeIcon, MeIcon, MessageIcon, SearchIcon,
  SettingIcon,
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
    path: '/user',
    svg: <MeIcon />,
    name: '프로필',
  },
  {
    path: '/settings',
    svg: <SettingIcon />,
    name: '화면설정',
  },
];

export const empty = {};
