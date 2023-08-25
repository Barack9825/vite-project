import type TaskType from "../Auxiliary/Interfaces"

interface TaskFunc {
  task: TaskType[]
  Add: (task: TaskType) => Promise<void>
  Elim: (id: number, title: string) => Promise<void>
}

export default TaskFunc
