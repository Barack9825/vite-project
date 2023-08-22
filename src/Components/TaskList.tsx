import TaskCard from "./TaskCard"
import { useContext, useState } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"

function TaskList (): JSX.Element {
  const { task } = useContext(FunctionContext)
  const [Lista, setLista] = useState(task)
  const List = Lista.map((card, index) => {
    return (
          <TaskCard card={card} key={index}/>

    )
  })
  /* useEffect(() => { setLista(task) }) */
  function FiltrarCompletas (): void {
    setLista(task.filter(task => task.completed))
  }
  function FiltrarInCompletas (): void {
    setLista(task.filter(task => !task.completed))
  }
  function EliminarFiltro (): void {
    setLista(task)
  }
  return (<>
  <p>Filtro</p>
            <div>
              <p onClick={FiltrarCompletas}>Completada </p>
              <p onClick={FiltrarInCompletas}>No Completada</p>
              <p onClick={EliminarFiltro}>Todas</p>
            </div>
  {List}</>)
}
export default TaskList
