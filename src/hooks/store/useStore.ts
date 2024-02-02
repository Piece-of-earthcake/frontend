import { create } from 'zustand';

interface IUseStoreState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

//example
export const useStore = create<IUseStoreState>(set => ({
  bears: 0,
  increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}));
