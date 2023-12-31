import React, { FC } from 'react';

type TodoListPropsType = {
    title: string
}

// const TodoList = (): JSX.Element => {
// const TodoList: React.FC = () => {

const TodoList: FC<TodoListPropsType> = (props: TodoListPropsType) => {
    return (
        <div className='todolist'>
            <h3 pro>What to learn</h3>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={true} /> <span>HTML&CSS</span></li>
                <li><input type="checkbox" checked={true} /> <span>JS</span></li>
                <li><input type="checkbox" checked={false} /> <span>React</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

export default TodoList;

