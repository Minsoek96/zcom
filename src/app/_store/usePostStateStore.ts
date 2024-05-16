import { create } from 'zustand';

type State = {
  imageFiles: File[];
  imagePreviews: string[];
};

type Action = {
  setImageFiles: (imageFiles: File[]) => void;
  setImagePreviews: (imagePreviews: string[]) => void;
  setRemoveImage: (imageFile: string) => void;
};

const usePostStateStore = create<State & Action>((set) => ({
  imageFiles: [],
  imagePreviews: [],
  setImageFiles: (imageFiles: File[]) => set(() => ({ imageFiles })),
  setImagePreviews: (imagePreviews: string[]) => set(() => ({ imagePreviews })),
  setRemoveImage: (imageFile: string) => set((state) => {
    const newImage = state.imagePreviews.filter(
      (item) => item !== imageFile,
    );
    return {
      imagePreviews: newImage,
    };
  }),
}));

export default usePostStateStore;
