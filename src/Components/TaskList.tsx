import TaskCard from "./TaskCard"
import { useContext, useState, useEffect } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"
import "../StyleSheets/TaskList.css"

function TaskList (): JSX.Element {
  const { task } = useContext(FunctionContext)
  const [Lista, setLista] = useState(task)
  const [state, SetState] = useState(0)
  const List = Lista.map((card, index) => {
    /* const checkbox=document.getElementById() */
    return (
      <TaskCard card={card} key={index} />

    )
  })
  useEffect(() => {
    if (state === 0) {
      setLista(task)
    } else if (state === 1) {
      setLista(task.filter(element => element.completed))
    } else {
      setLista(task.filter(element => !element.completed))
    }
  }, [state, task])

  useEffect(() => {
    const checkbox = document.getElementsByClassName("check") as HTMLCollectionOf<HTMLInputElement>
    for (let i = 0; i < checkbox.length; i++) {
      if (task.findIndex(obj => obj.id === Number(checkbox[i].id)) === -1) { continue }
      checkbox[i].checked = task[task.findIndex(obj => obj.id === Number(checkbox[i].id))].completed
    }
  })

  function FiltrarCompletas (): void {
    SetState(1)
  }
  function FiltrarInCompletas (): void {
    SetState(2)
  }
  function EliminarFiltro (): void {
    SetState(0)
  }
  function Filter (filtro: string): void {
    setLista(task.filter(element => element.title.includes(filtro)))
  }

  if (List.length !== 0) {
    return (
    <div id="Tasklist-container" className="col-11">

      <div id="list">{List}</div>
      <div id="filtro-container"><p id="selector">Filtrar</p>
        <div id="dropdown">
          <p onClick={FiltrarCompletas} id="completada">Completada </p>
          <p onClick={FiltrarInCompletas} id='no completada'>No Completada</p>
          <p onClick={EliminarFiltro}>Todas</p>
          <input type="text" name="Buscador" id="Buscador" placeholder="Buscar Tarea" onChange={(e) => { Filter(e.target.value) }} />
        </div></div>
    </div>)
  } else {
    return (<div id="Tasklist-container">

    <div id="emptylist"><p></p></div>
    <div id="filtro-container"><p id="selector">Filtrar</p>
      <div id="dropdown">
        <p onClick={FiltrarCompletas} id="completada">Completada </p>
        <p onClick={FiltrarInCompletas} id='no completada'>No Completada</p>
        <p onClick={EliminarFiltro}>Todas</p>
        <input type="text" name="Buscador" id="Buscador" placeholder="Buscar Tarea" onChange={(e) => { Filter(e.target.value) }} />
      </div></div>
  </div>)
  }
}
export default TaskList
