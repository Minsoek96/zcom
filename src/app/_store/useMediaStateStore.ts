import { create } from 'zustand';

type State = {
  imageFiles: File[];
  imagePreviews: string[];
  seletedImage: number;
};

type Action = {
  setImageFiles: (imageFiles: File[]) => void;

  setImagePreviews: (imagePreviews: string[]) => void;

  setRemoveImage: (imageFile: string) => void;

  setUpdateImage: (targetImage: string, newImage: string) => void;

  setSeletedImage: (seletedImage: string) => void;
};

const useMediaStateStore = create<State & Action>((set) => ({
  imageFiles: [],
  imagePreviews: [],
  seletedImage: 0,

  setImageFiles: (imageFiles: File[]) => set(() => ({ imageFiles })),

  setImagePreviews: (imagePreviews: string[]) => set(() => ({ imagePreviews })),

  setRemoveImage: (imageFile: string) => set((state) => {
    const newImage = state.imagePreviews.filter((item) => item !== imageFile);
    return {
      imagePreviews: newImage,
    };
  }),

  setUpdateImage: (targetImage: string, newImage: string) => set((state) => {
    const newImages = state.imagePreviews.map((item) => (item === targetImage ? newImage : item));
    return {
      imagePreviews: newImages,
    };
  }),

  setSeletedImage: (seletedImage: string) => set((state) => {
    const findIdx = state.imagePreviews.findIndex(
      (item) => item === seletedImage,
    );
    return {
      seletedImage: findIdx,
    };
  }),
}));

export default useMediaStateStore;
