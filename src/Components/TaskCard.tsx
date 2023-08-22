import { useContext, useState, useEffect } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"
import type TaskType from "../Auxiliary/Interfaces"
import EntryTitleTask from './EntryTitleTask'
import EditAceptButon from './EditAceptButton'
import '../StyleSheets/TaskCard.css'
import '../StyleSheets/Buttons.css'

function TaskCard ({ card }: { card: TaskType }): JSX.Element {
  const { Elim, task } = useContext(FunctionContext)

  useEffect(() => {
    const checkbox = document.getElementById(card.id.toString())
    checkbox.checked = card.completed
  })

  const [state, setState] = useState(true)

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
        <div className='tarea-cont'>
        <input className="check" id={card.id.toString()} name={"checkbox" + card.id} type="checkbox" onClick={() => { checkClick() }} ></input>
        <label className="checklabel" htmlFor={"checkbox" + card.id}>Completed</label>
       <EntryTitleTask editing={state} title={card.title} handleChange={handleChange} />
        <button onClick={() => { Elim(card.id, card.title) }}>
            eliminar
            </button>
        <EditAceptButon state={state} handleclick={handleclick}/>
        </div>
  )
}
export default TaskCard
