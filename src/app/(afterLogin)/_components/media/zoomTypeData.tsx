import { RectangleIcon, SquareIcon, WideIcon } from '../../_constants/MenuIcons';

export type ZoomType = 'origin' | 'wide' | 'square';

export type ZoomSize = {
  width: number;
  height: number;
}

export type ZoomProps = {
  id: string;
  type: ZoomType;
  width: number;
  height: number;
  icon: React.ReactNode;
}

export const ZoomInitalState: ZoomProps = {
  id: '',
  type: 'origin',
  width: 50,
  height: 35,
  icon: <svg />,

};

const zoomTypeData:ZoomProps[] = [
  {
    id: 'origin-01', type: 'origin', width: 50, height: 50, icon: <RectangleIcon />,
  },
  {
    id: 'wide-02', type: 'wide', width: 50, height: 35, icon: <WideIcon />,
  },
  {
    id: 'square-03', type: 'square', width: 55, height: 55, icon: <SquareIcon />,
  },
];

export default zoomTypeData;
