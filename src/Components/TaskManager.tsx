import { useContext, useState } from 'react'
import { FunctionContext } from '../Context/TaskFuncProvider'
function TaskManager (): JSX.Element {
  const { Add } = useContext(FunctionContext)
  const [title, setTitle] = useState('')
  function handleSubmit (e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()

    Add({ id: 0, title, completed: false })
  }
  return (
        <form onSubmit={ handleSubmit }>
            <input type="text" name="entrada" id="enrada" placeholder="Ingrese una tarea nueva" onChange={(e) => { setTitle(e.target.value) }}/>
            <input type="text" name="Buscador" id="Buscador" placeholder="Buscar Tarea" />
            <input type="submit" value="Aceptar" />

        </form>
  )
}

export default TaskManager
