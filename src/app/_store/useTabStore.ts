import create from 'zustand';

type TabType = 'recommend' | 'follow';
type SearchType = 'all' | 'follow';
type LocationType = 'all' | 'around';

type State = {
  tab: TabType;
  search: SearchType;
  location: LocationType;
};

type Action = {
  setTab: (value: TabType) => void;
  setSearch: (value: SearchType) => void;
  setLocation: (value: LocationType) => void;
};

export const useTabStore = create<State & Action>((set) => (
  {
    tab: 'recommend',
    setTab: (value: TabType) => set(() => ({ tab: value })),
    search: 'all',
    setSearch: (value: SearchType) => set(() => ({ search: value })),
    location: 'all',
    setLocation: (value: LocationType) => set(() => ({ location: value })),
  }
));

export const empty = {};
