import React from 'react';
import TodoList from './TodoList';
// import AddTodo from './AddTodo'

class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: "mandiin kucing",
                completed: true
            },
            {
                id: 2,
                title: "beli makanan kucing",
                completed: false
            },
            {
                id: 3,
                title: "nyembah kucing",
                completed: false
            }
        ]
    }

    // addTodo = (data) => {
    //     console.log('running')
    //     this.setState({
    //         todos: [...this.state.todos, data]
    //     })
    // };

    // delTodo = (id) => {
    //     console.log("deleted")
    //     this.setState({todos: [...this.state.todos.filter((item) => item.id !== id)]})
    // }

    render(){
        return(
            <div>
                {/* <AddTodo add={this.addTodo}/> */}
                <TodoList/>
                {/* <TodoList todos={this.state.todos} test="test" del={this.delTodo}/> */}
            </div>
        );
    }
}
export default TodoApp;