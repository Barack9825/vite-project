import { type ReactNode, createContext, useState, useEffect } from 'react'
import TaskData from '../Auxiliary/Data'
import type TaskType from '../Auxiliary/Interfaces'
import type TaskFunc from './TaskFunc'
import tareaServices from '../Services/TareaServices'

interface FunctionProps {
  children: ReactNode
}
const TaskF: TaskFunc = {
  task: TaskData,
  Add: () => {},
  Elim: () => {}
}

export const FunctionContext = createContext(TaskF)

function TaskFuncProvider ({ children }: FunctionProps): JSX.Element {
  const [tarea, setTask] = useState(TaskData)
  useEffect(() => {
    async function fetchTareas (): Promise<void> {
      try {
        const tareasData = await tareaServices.getTareas()
        setTask(tareasData)
        console.log(tarea)
      } catch (error) {
        console.log("qweqew")
      }
    }
    void fetchTareas()
  }, [])
  function Addtask (task: TaskType): void {
    setTask([...tarea, task])
  }
  function EraseTask (id: number, nombre: string): void {
    const confirmar = window.confirm("Esta seguro de que quiere eliminar la tarea " + nombre)
    if (confirmar) {
      setTask(tarea.filter(element => element.id !== id))
    }
  }
  return (
    <FunctionContext.Provider value={{ task: tarea, Add: Addtask, Elim: EraseTask }}>
      {children}
    </FunctionContext.Provider>
  )
}
export default TaskFuncProvider
