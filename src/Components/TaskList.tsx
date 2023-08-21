import TaskCard from "./TaskCard"
import { useContext } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"

function TaskList (): JSX.Element {
  const { task } = useContext(FunctionContext)
  const List = task.map((card, index) => {
    return (
          <TaskCard task={card} key={index}/>
    )
  })
  return (<>{List}</>)
}
export default TaskList
