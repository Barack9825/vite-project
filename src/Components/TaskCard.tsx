import type Task from "../Auxiliary/Interfaces"
function TaskCard ({ task }: { task: Task }): JSX.Element {
  return (
        <>
        <input type="checkbox"></input>
        <p id={task.id.toString()}>{task.title}</p>
        <button>
            eliminar
            </button>
        <button>editar</button>
        </>
  )
}
export default TaskCard
