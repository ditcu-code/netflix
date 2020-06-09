import React, {useState} from 'react';

const AddTodo = ({add}) => {
    const [title, setTitle] = useState("")

    const change = event => {
        console.log('change')
        setTitle(event.target.value)
    }
    
    const submit = event => {
        console.log("added")
        event.preventDefault();
        const newTodo = {
            id: 0,
            title: title, //atau cukup "title"
            completed: false
        }
        add(newTodo)
    }
    return(
        <div>
            <form onSubmit={submit}>
                <input type="text" value={title} onChange={change} placeholder="what's your next move?"/>
                <input type="submit" value="add"/>
            </form>
        </div>
    )
}

export default AddTodo;