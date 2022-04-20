import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoForm.css'

function TodoForm(){

    const [newTodoValue, setNewTodoValue] = React.useState('')


    const { 
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    };


    const onCancel = () =>{
        setOpenModal(false);
    };

    const onSubmit = (event) =>{
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal(false);
    };

    return (
        <form className ="form" 
        onSubmit={onSubmit}>
            <div className="container">
            <label>Crear ToDo</label>
            <textarea 
            className="textarea"
            value ={newTodoValue}
            onChange={onChange}
            placeholder=" Escribir ToDo"/>
            </div>
            <div class="">
                <button className="button" type="button" onClick={onCancel}>cancelar</button>
                <button className="button" type="submit"> añadir</button>
            </div>
        </form>
    );
}


export { TodoForm }