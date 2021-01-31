import React from 'react'
import todosData from './data/todosData'
import TodoItem from './components/TodoItem'

class App extends React.Component {
  render() {
    return <div className="todo-board">
      {todosData.map(todo => <TodoItem
        key={todo.id}
        text={todo.text}
        check={todo.complete}
      />)}
    </div>
  }
}

export default App;
