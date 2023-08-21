import type TaskType from "../Auxiliary/Interfaces"

interface TaskFunc {
  task: TaskType[]
  Add: (task: TaskType) => void
}

export default TaskFunc
