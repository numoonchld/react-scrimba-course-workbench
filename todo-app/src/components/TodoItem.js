import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        fontColor: "#888",
        fontStyle: 'italic',
        textDecoration: 'line-through',
    }

    return (
        <div className="todo-card">
            <input type="checkbox" checked={ props.check} onChange={() => props.clickHandler(props.id)}/>
            <span style={ props.check ? completedStyle : null} > {props.text} </span>
        </div>
    )
}

export default TodoItem
