import React from 'react'

function TodoItem(props) {
    return (
        <div className="todo-card">
            <input type="checkbox" checked={ props.check ? true : false} />
            <span> {props.text} </span>
        </div>
    )
}

export default TodoItem
