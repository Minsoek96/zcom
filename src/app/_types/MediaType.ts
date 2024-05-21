export type TabType = 'cut' | 'imageAlt' | 'content';

export type TabInfo = {
  id: string;
  main: React.ReactNode;
  type: TabType;
};
