import { ThemeDataProps } from '@/app/_types/ThemeType';

const themeData: ThemeDataProps[] = [
  {
    id: 'defaultTheme',
    color: 'rgb(255, 255, 255)',
    text: '기본',
    checked: false,
  },
  {
    id: 'darkTheme',
    color: 'rgb(21, 32, 43)',
    text: '어둡게',
    checked: false,
  },
  {
    id: 'deepDarkTheme',
    color: 'rgb(0, 0, 0)',
    text: '완전히 어둡게',
    checked: false,
  },
];

export default themeData;
