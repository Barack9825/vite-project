import { useContext, useState, useEffect } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"
import type TaskType from "../Auxiliary/Interfaces"
import EntryTitleTask from './EntryTitleTask'
import EditAceptButon from './EditAceptButton'
import '../StyleSheets/TaskCard.css'
import '../StyleSheets/Buttons.css'

function TaskCard ({ card }: { card: TaskType }): JSX.Element {
  const { Elim, task } = useContext(FunctionContext)

  useEffect(()=>{
    task[task.indexOf(card)].completed=card.completed
  },[card])

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
  function checkClick (e: React.MouseEvent<HTMLInputElement,MouseEvent>): void {
    const checkbox=e.target as HTMLInputElement 
    card.completed=checkbox.checked
    task[task.indexOf(card)].completed=card.completed
  }
  return (
        <div className='tarea-cont'>
        <input className="check" id={card.id.toString()} name={"checkbox" + card.id} type="checkbox" onClick={(e) => { checkClick(e) }} ></input>
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
