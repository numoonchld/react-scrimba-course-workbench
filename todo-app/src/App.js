import React from 'react'
import todosData from './data/todosData'
import TodoItem from './components/TodoItem'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: todosData
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(id) {

    this.setState(pastState => {

      const updatedTodos = pastState.todos.map(todo => {
        if (id === todo.id) {
          return ({
            ...todo,
            complete: !todo.complete
          })
        } 
        return todo
      })


      return ({
        todos: updatedTodos
      })

    })
  }

  render() {
    return <div className="todo-board">
      {this.state.todos.map(todo => <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        check={todo.complete}
        clickHandler={this.clickHandler}
      />)}
    </div>
  }
}

export default App;
