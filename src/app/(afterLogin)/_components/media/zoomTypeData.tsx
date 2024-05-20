import { RectangleIcon, SquareIcon, WideIcon } from '../../_constants/MenuIcons';

export type ZoomType = 'origin' | 'wide' | 'square';

type ZoomProps = {
  id: string;
  type: ZoomType;
  width: number;
  height: number;
  icon: React.ReactNode;
}

const zoomTypeData:ZoomProps[] = [
  {
    id: 'origin-01', type: 'origin', width: 0, height: 0, icon: <RectangleIcon />,
  },
  {
    id: 'wide-02', type: 'wide', width: 0, height: 0, icon: <WideIcon />,
  },
  {
    id: 'square-03', type: 'square', width: 0, height: 0, icon: <SquareIcon />,
  },
];

export default zoomTypeData;
