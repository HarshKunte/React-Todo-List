import React from 'react'
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import db from './firebase';

 function Todo({todo}) {
     const deleteTodo = (e)=>{
         e.preventDefault() 
         const item = e.target.parentElement
         item.classList.add('fall')
         setTimeout(() => {
             
             db.collection('todos').doc(todo.id).delete()
         }, 1000);
     }

     const completeTodo =(e)=>{
         console.log(e.target.parentElement);

        const item = e.target.parentElement;
        item.classList.toggle('completed')

        db.collection('todos').doc(todo.id).update(({
            active : !todo.todo.active
        }))

      
     }

    return (
        <div className={`todo  ${todo.todo.active ? '':'completed'}`}>

        <li className="todo-item">{todo.todo.todo}</li>
        <button onClick={completeTodo}  className="complete-btn" title="Completed">

        <DoneAllOutlinedIcon style={{fill:"white",pointerEvents:"none"}}/>
        </button>
        <button onClick={deleteTodo}  className="trash-btn" title="Delete">
        <DeleteIcon style={{fill:"white",pointerEvents:"none"}} />
        </button>
        </div>
    )
}

export default Todo;