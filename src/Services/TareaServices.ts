import axios from 'axios'

const API_URL = 'https://localhost:7071/api'

const tareaService = {
  getTareas: async () => {
    try {
      const response = await axios.get(`${API_URL}/tarea`)
      return response.data
    } catch (error) {
      console.error('Error al obtener las tareas:', error)
      throw error
    }
  },

  getTarea: async (id: number) => {
    try {
      const response = await axios.get(`${API_URL}/tarea/${id}`)
      return response.data
    } catch (error) {
      console.error(`Error al obtener la tarea con ID ${id}:`, error)
      throw error
    }
  },

  addTarea: async (tarea: object) => {
    try {
      const response = await axios.post(`${API_URL}/tarea`, tarea)
      return response.data
    } catch (error) {
      console.error('Error al agregar la tarea:', error)
      throw error
    }
  },
  DeleteTarea: async (id: number) => {
    try {
      const response = await axios.delete(`${API_URL}/tarea/${id}`)
      return response.data
    } catch (error) {
      console.error('Error al agregar la tarea:', error)
      throw error
    }
  }
}

export default tareaService
