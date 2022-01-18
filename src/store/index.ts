import { createStore, createTypedHooks, persist } from "easy-peasy";

import StoreModel from "./model";

const store = createStore(
  persist(StoreModel, {
    storage: "localStorage",
  }),
  {
    name: "form--store",
  }
);

const { useStoreActions, useStoreState, useStore } = createTypedHooks<typeof StoreModel>();

const useActions = useStoreActions;

const useGlobalState = useStoreState;

const useTypedStore = useStore;

const cleanStore = {
  flush: store.persist.flush,
  clear: store.persist.clear,
};

export {
  useStore,
  useTypedStore,
  useStoreState,
  useGlobalState,
  cleanStore,
  useActions,
};

export default store;
