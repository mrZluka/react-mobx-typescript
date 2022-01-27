import React from "react";
import "./App.css";
import { RootStoreProvider } from "./store/providers/RootProvider";
import { RootStore } from "./store/RootStore";
import TodoList from "./composables/TodoList";
import ToDoInput from "./composables/ToDoInput";
import { AppContainer } from "./AppStyle";

const store = new RootStore();

function App() {
    return (
        <AppContainer className="App">
            <header className="App-header">
                <h2>TypeScript MobX todo</h2>
            </header>
            <RootStoreProvider store={store}>
                <AppContainer>
                    <ToDoInput/>
                    <TodoList/>
                </AppContainer>
            </RootStoreProvider>
        </AppContainer>
    );
}

export default App;
