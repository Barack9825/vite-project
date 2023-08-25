import { useContext, useState /* useEffect */ } from 'react'
import { FunctionContext } from "../Context/TaskFuncProvider"
import type TaskType from "../Auxiliary/Interfaces"
import EditAceptButon from './EditAceptButton'
import EntryTitleTask from './EntryTitleTask'
import '../StyleSheets/TaskCard.css'
import { AiFillRest } from "react-icons/ai"

function TaskCard ({ card }: { card: TaskType }): JSX.Element {
  const { Elim, task } = useContext(FunctionContext)

  /* useEffect(() => {
    console.log(task)
    task[task.indexOf(card)].completed = card.completed
  }, [card, task])
 */
  const [state, setState] = useState(true)

  const [value, setValue] = useState(card.descripcion)

  function handleclick (): void {
    if (!state) {
      card.descripcion = value
      task[task.indexOf(card)].descripcion = value
    }
    setState(!state)
  }

  function handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }
  function checkClick (e: React.MouseEvent<HTMLInputElement, MouseEvent>): void {
    const checkbox = e.target as HTMLInputElement
    card.status = checkbox.checked
    task[task.indexOf(card)].status = card.status
  }
  console.log(card.descripcion)
  return (

    <div className='tarea-cont '>

      <input className="check " id={card.id.toString()} name={"checkbox" + card.id} type="checkbox" onClick={(e) => { checkClick(e) }} ></input>

      <label className="checklabel col-2" htmlFor={"checkbox" + card.id}>Completed</label>

      <EntryTitleTask editing={state} title={card.descripcion} handleChange={handleChange} />

      <AiFillRest className='icon col-2 row-5' id='eliminar' onClick={() => { Elim(card.id, card.descripcion) }}/>

      <EditAceptButon state={state} handleclick={handleclick} />

    </div>
  )
}
export default TaskCard
