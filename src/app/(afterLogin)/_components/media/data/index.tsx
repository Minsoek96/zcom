import {
  SquareIcon,
  CutIcon, FlagIcon, RectangleIcon, WideIcon,
} from '@/app/(afterLogin)/_constants/MenuIcons';
import { TabInfo, ZoomProps } from '@/app/_types/MediaType';

export const mediaTabs: TabInfo[] = [
  {
    id: 'cut-01',
    main: <CutIcon />,
    type: 'cut',
  },
  {
    id: 'alt-02',
    main: <span>ALT</span>,
    type: 'imageAlt',
  },
  {
    id: 'content-03',
    main: <FlagIcon />,
    type: 'content',
  },
];

export const zoomTypes: ZoomProps[] = [
  {
    id: 'origin-01',
    type: 'origin',
    width: 50,
    height: 50,
    icon: <RectangleIcon />,
  },
  {
    id: 'wide-02',
    type: 'wide',
    width: 50,
    height: 35,
    icon: <WideIcon />,
  },
  {
    id: 'square-03',
    type: 'square',
    width: 55,
    height: 55,
    icon: <SquareIcon />,
  },
];
