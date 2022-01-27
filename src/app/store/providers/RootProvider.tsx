/**
 * created by mrzluka on 26.01.2022
 */
import { ReactElement, useContext } from "react";
import { RootStore } from "../RootStore";
import { createStoreContext, StoreComponent } from "./index";

export const StoreContext = createStoreContext({} as RootStore);

export const RootStoreProvider: StoreComponent<RootStore> = ({
                                                  children,
                                                  store
                                              }): ReactElement => {
    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

export const useStores = (): RootStore => useContext(StoreContext);

