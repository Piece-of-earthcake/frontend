import { create } from 'zustand';

export interface useGoogleMapStore {
  map?: google.maps.Map;
  setMap: (
    initializer:
      | useGoogleMapStoreState
      | ((state: useGoogleMapStoreState) => useGoogleMapStoreState)
  ) => void;
}

export type useGoogleMapStoreState = Omit<useGoogleMapStore, 'setMap'>;

const useGoogleMapStore = create<useGoogleMapStore>(set => ({
  setMap: initializer => {
    set(({ setMap, ...state }) => {
      return {
        ...(typeof initializer === 'function'
          ? initializer(state)
          : initializer),
        setMap
      };
    });
  }
}));

export default useGoogleMapStore;
