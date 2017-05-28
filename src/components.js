import React from 'react';
import { addTodo, toggleTodo } from './actions';


export function Todo(props) {
    const { todo } = props;
    if (todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}

export function TodoList(props) {
    const { todos } = props;
    return (
        <div className='todo'>
            <input type='text' placeholder='Todo...'/>
            <button type='button' onClick={()=> {addTodo(this.updateItem().text)}}>
                Add ToDo
            </button>
            <ul className='todo__list'>
                {todos.map(t => (
                    <li key={t.id} className='todo__item'>
                        <Todo todo={t}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}