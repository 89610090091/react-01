import React from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
    // BILL
    const todoListTitle_1: string = "what to learn"
    const todoListTitle_2: string = "what to buy"
    return (
        <div className="App">
            {/* <TodoList />
            <TodoList /> */}
            <TodoList title={todoListTitle_1} />
            <TodoList title={todoListTitle_2} />
        </div>
    );
}

export default App;
