import type TaskType from "../Auxiliary/Interfaces"

interface TaskFunc {
  task: TaskType[]
  Add: (task: TaskType) => void
  Elim: (id: number, title: string) => void

}

export default TaskFunc
