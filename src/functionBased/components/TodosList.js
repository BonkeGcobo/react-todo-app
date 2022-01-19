import React from "react"
import TodoItem from "./TodoItem"
class TodoList extends React.Component {

    render(){
    return( <ul>
            {this.props.todos.map(todo => (
             <li>
             <TodoItem 
             key={todo.id} 
             todo={todo}
             handleChangeProps={this.props.handleChangeProps}
             deleteTodoProps={this.props.deleteTodoProps}
             setUpdate={this.props.setUpdate}
             />
             </li>
            ))}</ul>)
    }

}
export default TodoList;