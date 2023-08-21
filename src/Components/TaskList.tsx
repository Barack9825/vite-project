import TaskData from "../Auxiliary/Data"
import TaskCard from "./TaskCard"
const List = TaskData.map((card, index) => {
  return (
        <TaskCard task={card} key={index}/>
  )
})
function TaskList (): JSX.Element {
  return (<>{List}</>)
}
export default TaskList
