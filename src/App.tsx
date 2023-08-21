import './App.css'
import TaskCard from './Components/TaskCard'
import Tareas from './Auxiliary/Data'

function App (): JSX.Element {
  return (
    <>
<TaskCard tarea={Tareas[0]}/>
    </>
  )
}

export default App
