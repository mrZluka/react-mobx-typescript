/**
 * created by mrzluka on 26.01.2022
 */
import { Component, ReactNode } from "react";
import { RootStore } from "../../store/RootStore";

type PropReturn<T> = Readonly<T> & Readonly<{ children?: ReactNode | undefined }>;

export abstract class StoreComponent<TProp, TS = never> extends Component<TProp, TS> {
    readonly props: PropReturn<TProp> & {
        store : RootStore
    };

    constructor(props: any) {
        super(props);
        this.props = props;
    }
}
