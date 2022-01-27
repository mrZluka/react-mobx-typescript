import { createContext, FC, ReactNode } from "react";

/**
 * created by mrzluka on 26.01.2022
 */

export const createStoreContext = <TStore>(store: TStore) => createContext(store);

export type StoreComponent<TStore> = FC<{
    store: TStore;
    children: ReactNode;
}>;
