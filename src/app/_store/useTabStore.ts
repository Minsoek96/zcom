import create from 'zustand';

type TabType = 'recommend' | 'follow';

type State = {
  tab: TabType;
};

type Action = {
  setTab: (value: TabType) => void;
};

export const useTabStore = create<State & Action>((set) => ({
  tab: 'recommend',
  setTab: (value: TabType) => set(() => ({ tab: value })),
}));

export const empty = {};
