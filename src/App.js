import React, { useState } from 'react'
import { isEmpty } from 'lodash'
import shortid from 'shortid'

function App() {
  //Estado que almacena nombre de la nueva tarea
  const [task, setTask] = useState("")
  //otro estado que va a iniciar con un array de tareas
  const [tasks, setTasks] = useState([])


  const addTask = (e) => {
    //la siguiente linea es para evitar que se reargue la pagina con el submit
    e.preventDefault()
    //La siguiente linea es para validar si un campo esta vacio, se utiliza una libreria Lodash
    if (isEmpty(task)) {
      console.log("Task Empty")
      return
    }
    
    //Le agregamos otra tarea
    
    const newTask = {
      id: shortid.generate(),
      name: task
      }
    //agregamos la tarea en task
    setTasks([ ...task, newTask ])
    setTask("")
  }

  return (
    <div className="container mt-5" >
      <h1>Tareas</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {
                //vamos a iterar con map un objeto llamado task
                tasks.map((task)=> (
                  // Key es el identificador unico de la fila
            <li className="list-group-item" key={task.id}>
              <span className="lead">{task.name}</span>
              <button className="btn btn-danger btn-sm float-right mx-2"> Eliminar</button>
              <button className="btn btn-warning btn-sm float-right"> Editar</button>
            </li>
                ))
            }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulario</h4>
          <form onSubmit={addTask}>
            <input
            type= "tex"
            className="form-control mb-2"
            placeholder="Ingrese una tarea.."
            onChange={(text) => setTask(text.target.value)}
            value = {task}
            >
            </input>
            <button 
            className="btn btn-dark btn-block"
            type="submit">            
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
