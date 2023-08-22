import { useContext, useState, useEffect } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"
import type TaskType from "../Auxiliary/Interfaces"
import EntryTitleTask from './EntryTitleTask'
import EditAceptButon from './EditAceptButton'

function TaskCard ({ card }: { card: TaskType }): JSX.Element {
  const { Elim, task } = useContext(FunctionContext)

  useEffect(() => {
    const checkbox = document.getElementById(card.id.toString())
    checkbox.checked = card.completed
  })

  const [state, setState] = useState(true)
  const [stateCheck, setStateCheck] = useState(false)
  const [value, setValue] = useState(card.title)

  function handleclick (): void {
    if (!state) {
      card.title = value
      task[task.indexOf(card)].title = value
    }
    setState(!state)
  }

  function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }
  function checkClick (): void {
    const checkbox = document.getElementById(card.id.toString())
    card.completed = checkbox?.checked
  }
  return (
        <>
        <input  id={card.id.toString()} type="checkbox" onClick={() => { checkClick() }} ></input>
       <EntryTitleTask editing={state} title={card.title} handleChange={handleChange} />
        <button onClick={() => { Elim(card.id, card.title) }}>
            eliminar
            </button>
        <EditAceptButon state={state} handleclick={handleclick}/>
        </>
  )
}
export default TaskCard
