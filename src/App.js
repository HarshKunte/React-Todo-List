import './App.css';
import React, { useState,useEffect } from 'react';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';
function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');


  const addTodo = (e)=>{
    e.preventDefault()
    db.collection('todos').add({
      todo: input,
      active:true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
   
    setInput('')
  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').orderBy('active','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc =>({id:doc.id,todo:doc.data()})))
      
    })
    return () => {
      
    }
  }, [])

 
 
  
  return (
    <div className="App">
          <header>
      <h2 >TODO🚀</h2>
    </header>
    <div className="main-container">
      <form>
        <input type="text" value={input} onChange={e => setInput(e.target.value)} className="todo-input" placeholder="What's your plan?" />
        
        <button disabled={!input} className="todo-button" onClick={addTodo} type="submit" >
          <AddBoxOutlinedIcon/>
        </button>
        
      </form>
      <div className="todo-container">
        <ul className="todo-list">
          {
            todos.map((todo)=>(
             <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos}/>
            ))
          }
        </ul>
      </div>
    </div>
    
    </div>
  );
}

export default App;
