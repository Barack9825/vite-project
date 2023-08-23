import { useContext, useState } from 'react'
import { FunctionContext } from '../Context/TaskFuncProvider'
import '../StyleSheets/TaskManager.css'
function TaskManager (): JSX.Element {
  const { Add, task } = useContext(FunctionContext)
  const [title, setTitle] = useState('')
  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    Add({ id: task.length, title, completed: false })
  }
  return (
        <form onSubmit={ handleSubmit }>
            <input type="text" name="entrada" id="entrada" placeholder="Ingrese una tarea nueva" onChange={(e) => { setTitle(e.target.value) }}/>
            <input type="submit" value="Aceptar"id='submit' />

        </form>
  )
}

export default TaskManager
