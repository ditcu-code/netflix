import React, {useState} from 'react';
import {connect} from "react-redux";
import "./TodoList.css";
import { delTodo, addTodo } from '../store/actions/todoAction';
import CounterView from './CounterView';
import SearchBar from './SearchBar'
// import AddTodo from "./AddTodo"

const mapStateToProps = state => ({
    judul: state.todoReducer.title,
    todos: state.todoReducer.todos
})


const TodoList = ({judul, todos, delTodo, addTodo}) => {
    const [title, setTitle] = useState("")
    const change = event => {
        setTitle(event.target.value)
    }
    const submit = event => {
        console.log("added")
        event.preventDefault();
        const len = todos.length;
        const newTodo = {
            id: len+ 1,
            title,
            completed: false
        }
        addTodo(newTodo)
        setTitle("")

    }
    // const addNewTodo = () => {}

        return(
            <div>
               <h1>{judul}</h1>
               <CounterView/>
               <form onSubmit={submit}>
                   <input type="text"
                   value={title}
                   onChange={change}
                   placeholder="what's your next move?"/>
                   <input type="submit" value="add" />
               </form>
               {/* <AddTodo add={this.addTodo}/> */}
               {todos.map(todo=>
                    <div key={todo.id}> 
                        <p>{todo.title}
                            <button onClick={()=>delTodo(todo.id)}>delete</button>
                        </p>
                    </div> 
               )}
               <SearchBar/>
            </div>
        )
    
}

export default connect(mapStateToProps, {addTodo, delTodo})(TodoList);