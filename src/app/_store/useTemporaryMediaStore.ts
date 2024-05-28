import { create } from 'zustand';
import { TemporaryMedia } from '../_types/MediaType';

type State = {
  temporaryMedias: TemporaryMedia[];
};

type Action = {
  addTemporaryMedia: (newMedia: TemporaryMedia) => void;
  clearTemporaryMedias: () => void;
};

const useTemporaryMediaStore = create<State & Action>((set) => ({
  temporaryMedias: [],

  addTemporaryMedia: (media: TemporaryMedia) => set((state) => {
    const mediaExists = state.temporaryMedias.some(
      (img) => img.mediaSrc === media.mediaSrc,
    );
    const newMediaList = mediaExists
      ? state.temporaryMedias.map(
        (existingMedia) => (existingMedia.mediaSrc === media.mediaSrc ? media : existingMedia),
      )
      : [...state.temporaryMedias, media];

    return {
      temporaryMedias: newMediaList,
    };
  }),

  clearTemporaryMedias: () => set(() => ({
    temporaryMedias: [],
  })),

}));

export default useTemporaryMediaStore;
