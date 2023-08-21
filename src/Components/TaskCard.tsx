import type Tarea from "../Auxiliary/Interfaces"
function TaskCard ({ tarea }: { tarea: Tarea }): JSX.Element {
  return (
        <>
        <input type="checkbox"></input>
        <p id={tarea.id.toString()}>{tarea.title}</p>
        <button>
            eliminar
            </button>
        <button>editar</button>
        </>
  )
}
export default TaskCard
