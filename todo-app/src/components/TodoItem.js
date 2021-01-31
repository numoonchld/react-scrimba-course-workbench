import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-card">
            <input type="checkbox" checked={ props.check} onChange={() => props.clickHandler(props.id)}/>
            <span> {props.text} </span>
        </div>
    )
}

export default TodoItem
