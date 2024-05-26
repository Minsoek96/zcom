export type TabType = 'cut' | 'imageAlt' | 'content';

export type TabInfo = {
  id: string;
  main: React.ReactNode;
  type: TabType;
};

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

export type TemporaryMedia = {
  zoomSize: ZoomSize;
  scale: number;
  mediaSrc: string;
};
