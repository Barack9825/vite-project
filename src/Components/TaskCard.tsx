import { useContext } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"
import type TaskType from "../Auxiliary/Interfaces"

function TaskCard ({ task }: { task: TaskType }): JSX.Element {
  const { Elim } = useContext(FunctionContext)
  return (
        <>
        <input type="checkbox"></input>
        <p id={task.id.toString()}>{task.title}</p>
        <button onClick={() => { Elim(task.id) }}>
            eliminar
            </button>
        <button>editar</button>
        </>
  )
}
export default TaskCard
