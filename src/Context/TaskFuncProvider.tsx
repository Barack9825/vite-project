import { type ReactNode, createContext, useState } from 'react'
import TaskData from '../Auxiliary/Data'
import type TaskType from '../Auxiliary/Interfaces'
import type TaskFunc from './TaskFunc'

interface FunctionProps {
  children: ReactNode
}
const TaskF: TaskFunc = {
  task: TaskData,
  Add: () => { },
  Elim: () => {}
}

export const FunctionContext = createContext(TaskF)

function TaskFuncProvider ({ children }: FunctionProps): JSX.Element {
  const [tarea, setTask] = useState(TaskData)
  function Addtask (task: TaskType): void {
    setTask([...tarea, task])
  }
  function EraseTask (id: number): void {
    setTask(tarea.filter(element => element.id !== id))
  }
  return (
    <FunctionContext.Provider value={{ task: tarea, Add: Addtask, Elim: EraseTask }}>
      {children}
    </FunctionContext.Provider>
  )
}
export default TaskFuncProvider
