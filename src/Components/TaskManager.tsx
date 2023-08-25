import { useContext, useState } from 'react'
import { FunctionContext } from '../Context/TaskFuncProvider'
import '../StyleSheets/TaskManager.css'
function TaskManager (): JSX.Element {
  const { Add, task } = useContext(FunctionContext)
  const [Description, setDescription] = useState('')
  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const today = new Date()

    today.setFullYear(1990, 3, 4)
    console.log(today)
    void Add({ id: task.length, descripcion: Description, status: false, fechaCreacion: today, fechaCompletada: undefined })
  }
  return (
        <form className='col-5'onSubmit={ handleSubmit }>
            <input className='col-7'type="text" name="entrada" id="entrada" placeholder="Ingrese una tarea nueva" onChange={(e) => { setDescription(e.target.value) }}/>
            <input className='col-2'type="submit" value="Aceptar"id='submit' />

        </form>
  )
}

export default TaskManager
