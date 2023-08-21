import Tareas from "../Auxiliary/Data"
import TaskCard from "./TaskCard"
const List = Tareas.map((task, index) => {
  return (
        <TaskCard tarea={task} key={index}/>
  )
})
function TaskList (): JSX.Element {
  return (<>{List}</>)
}
export default TaskList
