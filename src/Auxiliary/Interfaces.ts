interface TaskType {
  id: number
  descripcion: string
  status: boolean
  fechaCreacion: Date
  fechaCompletada?: Date
}

export default TaskType
